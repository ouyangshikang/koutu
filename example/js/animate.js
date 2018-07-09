let canvas = new fabric.Canvas('matting')
let rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: '#f00',
  width: 30,
  height: 30,
})

canvas.add(rect)

// rect.set('angle', 45)

rect.animate('angle', 45, {
  onChange: canvas.renderAll.bind(canvas)
})


// rect.animate('left', '+=100', {
//   onChange: canvas.renderAll.bind(canvas)
// })

rect.animate('left', '+=100', {
  onChange: canvas.renderAll.bind(canvas),
  duration: 3000,
  easing: fabric.util.ease.easeOutBounce
});