let canvas = new fabric.Canvas('matting')
let path = new fabric.Path('M 0 0 L 200 100 L 170 200 z')
path.set({fill: '#f00', stroke: '#000', opacity: 0.8})
canvas.add(path)