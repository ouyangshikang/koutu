<template>

</template>

<script>
/* 改变图片精灵的大小，位置，比例，旋转 */
import * as PIXI from 'pixi.js'

// alias
let Application = PIXI.Application,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite,
	utils = PIXI.utils

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
	.add([
		require("/assets/1.jpg"),
		require("/assets/2.jpg"),
	])
	.on('progress', loadProgressHandler)
	.load(setup)

function setup() {
	console.log('all file loaded')
  let sprite1 = new Sprite(resources[require("/assets/1.jpg")].texture)
  let sprite2 = new Sprite(resources[require("/assets/2.jpg")].texture)
  app.stage.addChild(sprite1)
  app.stage.addChild(sprite2)
	// Position the sprites
	sprite2.x = 100
  sprite2.y = 100
  sprite2.width = 100
  sprite2.height = 100
  // sprite2.scale.x = 2
  // sprite2.scale.y = 2  // sprite2.scale.set(2, 2);
  // 改变精灵旋转的锚点
  sprite2.anchor.set(1, 0)
  sprite2.rotation = 0

}
function loadProgressHandler (loader, resource) {
	console.log('loading:', resource.name)
	console.log('progress: ' + loader.progress + '%'); 
}
export default {

}
</script>

<style lang="scss">

</style>
