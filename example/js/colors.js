// fabric 支持hex,rgb,rgba,hsl等
let hex1 = new fabric.Color('#f00')
let hex2 = new fabric.Color('356735')

let rgb = new fabric.Color('rgb(100, 100, 100)')
let rgba = new fabric.Color('rgb(100, 100, 100, .5)')

let hex2rgb = new fabric.Color('#f00').toRgb()
let rgb2hex = new fabric.Color('rgb(100, 100, 100)').toHex()


let yello = new fabric.Color('#f7ff55')
let blue = new fabric.Color('#559cff')
let overColor = yello.overlayWith(blue).toHex()
let grayColor = yello.toGrayscale().toHex()