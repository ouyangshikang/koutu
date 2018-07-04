<template>

</template>

<script>
/* 绘制几何图形 */
import * as PIXI from 'pixi.js'
// alias
let Application = PIXI.Application,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite,
  utils = PIXI.utils,
  TextureCache = PIXI.utils.TextureCache,
  Graphics = PIXI.Graphics


let app = new Application({
	antialias: true,
	transparent: false,
	resolution: 1,
	// forceCanvas: true, // 强制使用canvas渲染
})
document.body.appendChild(app.view)
app.renderer.backgroundColor = 0xe6e6e6  // 渲染背景色
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);


export default {

}
</script>

<style lang="scss">

</style>
