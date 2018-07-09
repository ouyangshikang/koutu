let canvas = new fabric.Canvas('matting')
let rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: '#f00',
  width: 30,
  height: 30,
  angle: 45
})

canvas.add(rect)

rect.set({
  left: 20, 
  top: 50
})
canvas.renderAll()

let circle = new fabric.Circle({
  left: 100,
  top: 100,
  radius: 10,
  fill: '#f00'
})

let triangle = new fabric.Triangle({
  width: 20,
  height: 30,
  fill: 'blue',
  left: 50,
  top: 50
})
canvas.add(circle, triangle)