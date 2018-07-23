/* 改变图片精灵的大小，位置，比例，旋转 */
import * as PIXI from 'pixi.js'
// alias
let Application = PIXI.Application,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite,
	utils = PIXI.utils,
  TextureCache = PIXI.utils.TextureCache,
  Rectangle = PIXI.Rectangle

let app = new Application({
	antialias: true,
	transparent: false,
	resolution: 1,
})
console.log(app)
document.body.appendChild(app.view)
app.renderer.backgroundColor = 0xe6e6e6  // 渲染背景色
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

loader
  .add(require("/assets/tileset.png"))
  .load(setup)


function setup () {
  // 用一个矩形块去截取雪碧图来创建精灵的纹理
  let texture = TextureCache[require("/assets/tileset.png")] // 雪碧图纹理
  let rectangle = new Rectangle(192, 128, 64, 64)
  texture.frame = rectangle;
  // 创建精灵
  let rocket = new Sprite(texture);
  app.stage.addChild(rocket)
}
