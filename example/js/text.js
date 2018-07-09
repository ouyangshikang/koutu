let canvas = new fabric.Canvas('matting')
let textStr = 'hello fabric'
let text = new fabric.Text(textStr, {
  left: 100,
  top: 100,
  fontFamily: 'Comic Sans',
  fontStyle: 'italic',
  fontSize: 40,
  fontWeight: 'bold',  // normal, bold or number(100, 200, 400, 600, 800)
  linethrough: 'line-through', // line-through
  underline: 'underline',  // underline
  overline: 'overline', // overline
  shadow: 'rgba(0,0,0,0.8) 0 0 10px',  // text-shadow
  textAlign: 'center',
  stroke: '#f00',  // 描边
  strokeWidth: 2,
  textBackgroundColor: '#ccc'
})
canvas.add(text)
