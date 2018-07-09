let canvas = new fabric.Canvas('matting')
let circle = new fabric.Circle({
  left: 100,
  top: 100,
  radius: 50,
  strokeWidth: 1, //设置圆的边框是1个像素
  stroke: 'red' //边框颜色是红色
})

circle.setGradient('fill', {
  type: 'linear',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: circle.height,
  colorStops: {
    0: 'red',
    0.2: 'yello',
    0.4: 'green',
    0.6: 'orange',
    0.8: 'blue',
    1: 'pink'
  }
})
canvas.add(circle)