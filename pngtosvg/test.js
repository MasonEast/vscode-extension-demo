
const sharp = require("sharp")
const path = require('path')
const saveSvg = require('./svg2png')
const { convert } = require('convert-svg-to-png');
convert(path.resolve('../images', '1.svg')).then(res => {
    console.log(res)
})



// saveSvg.saveSvgAsPng(path.resolve('../images', '1.svg'), "diagram.png", { height: 800, width: 1400 });


// sharp(path.resolve('../images', '1.svg'))
//     .png()
//     .toFile("new-file.png")
//     .then(function (info) {
//         console.log(info)
//     })
//     .catch(function (err) {
//         console.log(err)
//     })