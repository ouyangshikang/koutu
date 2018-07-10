let canvas = new fabric.Canvas('matting')
console.log(JSON.stringify(canvas))

let rect = new fabric.Rect({
  width: 100,
  height: 100,
  top: 100,
  left: 100,
  fill: 'red'
})
canvas.add(rect)
// 将图形进行序列化
console.log(JSON.stringify(canvas.toJSON()))
console.log(canvas.toSVG({
  x: 100,
  y: 100,
  width: 200,
  height: 300
}))

// 把序列化的字符串恢复成图形

// canvas.loadFromJSON('{"version":"2.3.3","objects":[{"type":"rect","version":"2.3.3","originX":"left","originY":"top","left":0,"top":0,"width":100,"height":100,"fill":"blue","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"rx":0,"ry":0}]}')

