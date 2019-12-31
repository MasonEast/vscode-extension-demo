// const sharp = require("sharp")

const vscode = require('vscode');

//插件激活时调用activate方法， 关闭时调用deactivate方法
function activate (context) {
    console.log('你的插件被激活了!');

    vscode.window.activeTextEditor.edit(editBuilder => {
        // 从开始到结束，全量替换
        const end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);
        const text = '新替换的内容';
        editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), text);
    });



    //通过registerCommand注册命令， 但是注册的命令必须在package.json中声明好
    context.subscriptions.push(vscode.commands.registerCommand('extension.coolmason', () => {
        vscode.window.showInformationMessage('cool');
    }));

    //该方法第二个参数支持一个可选参数uri
    context.subscriptions.push(vscode.commands.registerCommand('extension.demo.svg2png', (args) => {
        console.log(args)
    }));

    // 编辑器命令
    context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.testEditorCommand', (textEditor, edit) => {
        console.log('您正在执行编辑器命令！');
        console.log(textEditor, edit);
    }));

    //注意： 命令注册好后都要push到subscriptions中
}
exports.activate = activate;

function deactivate () { }

module.exports = {
    activate,
    deactivate
}
