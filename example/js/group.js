let canvas = new fabric.Canvas('matting')

let circle = new fabric.Circle({
  radius: 100,
  fill: '#ff0',
  scaleY: 0.5,
  originX: 'cneter', // 调整中心点的x轴坐标
  originY: 'center'
})

let text = new fabric.Text('fabric text', {
  fontSize: 30,
  originX: 'center',
  originY: 'center'
})

let group = new fabric.Group([circle, text], {
  top: 150,
  left: 100,
  angle: -10
})
canvas.add(group)

group.on('selected', () => {
  group.item(0).setColor('red')
  group.item(1).set({
    text: 'fabric hello',
    fill: 'white'
  })
})
