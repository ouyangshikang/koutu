<template>

</template>

<script>
import * as PIXI from 'pixi.js'

// alias
let Application = PIXI.Application,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite,
	utils = PIXI.utils

let type = 'WebGL'
// 测试浏览器用webgl或者canvas来渲染
if(!utils.isWebGLSupported()){
	type = 'canvas'
}
utils.sayHello(type)

let app = new Application({
	width: 252,
	height: 252,
	antialias: true,
	transparent: false,
	resolution: 1,
	// forceCanvas: true, // 强制使用canvas渲染
})
console.log(app)
document.body.appendChild(app.view)
app.renderer.backgroundColor = 0xe6e6e6  // 渲染背景色
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

loader
	.add(require("/assets/logo.png"))
	.load(setup)

function setup() {
  let sprite = new Sprite(
    resources[require("/assets/logo.png")].texture
  );
  app.stage.addChild(sprite)
//   app.stage.removeChild(sprite)  // 隐藏精灵
//   sprite.visible = false;
}
export default {

}
</script>

<style lang="scss">

</style>
