let canvas = new fabric.Canvas('matting')

canvas.on('mouse:down', (options) => {
  console.log(options.e.clientX, options.e.clientY)
})

let rect = new fabric.Rect({
  width: 100,
  height: 50,
  fill: 'green'
})
rect.on('selected', () => {
  console.log('selected a rectangle')
})

let circle = new fabric.Circle({
  top: 100,
  left: 150,
  radius: 75,
  fill: 'blue' 
});
circle.on('selected', () => {
  console.log('selected a circle')
});

canvas.add(rect, circle)