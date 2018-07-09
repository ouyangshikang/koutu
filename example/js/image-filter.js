// 这里一定得起一个服务器来跑，不然会出现一个报错。
let canvas = new fabric.Canvas('matting')
fabric.Image.fromURL(require('../img/logo.png'), (img) => {
  console.log(img)
  let filter1 = new fabric.Image.filters.Grayscale()
  let filter2 = new fabric.Image.filters.Sepia()
  let filter3 = new fabric.Image.filters.Brightness({
    brightness: 0.05
  })
  // 多个过滤器叠加
  img.filters.push(filter2, filter1, filter3)
  img.applyFilters()
  // add image onto canvas (it also re-render the canvas)
  canvas.add(img)
})


fabric.Image.filters.Redify = fabric.util.createClass({
  type: 'Redify',
  applyTo(canvas) {
    let context = canvas.getContext('2d'),
        imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        data = imageData.data
    
    for (var i = 0, len = data.length; i < len; i += 4) {
      data[i + 1] = 0
      data[i + 2] = 0
    }

    context.putImageData(imageData, 0, 0)
  }
})
fabric.Image.filters.Redify.fromObject = function(object) {
  return new fabric.Image.filters.Redify(object)
};

