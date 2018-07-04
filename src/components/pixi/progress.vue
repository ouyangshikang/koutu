<template>

</template>

<script>
/* 监视文件被加载的进程 */
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
		require("/assets/3.jpg"),
	])
	.on('progress', loadProgressHandler)
	.load(setup)

function setup() {
	console.log('all file loaded')
  let sprite1 = new Sprite(resources[require("/assets/1.jpg")].texture)
  let sprite2 = new Sprite(resources[require("/assets/2.jpg")].texture)
  let sprite3 = new Sprite(resources[require("/assets/3.jpg")].texture)
  app.stage.addChild(sprite1)
  app.stage.addChild(sprite2)
	app.stage.addChild(sprite3)
	// Position the sprites
	sprite2.position.set(100, 100)
	sprite3.position.set(200, 200)
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
