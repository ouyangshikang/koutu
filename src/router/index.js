import Vue from 'vue';
import Router from 'vue-router';

// 懒加载
const sprite = () => import('../components/pixi/sprite');
const progress = () => import('../components/pixi/progress');
const position = () => import('../components/pixi/position');
const spriteFromImg = () => import('../components/pixi/spriteFromImg');
const graphic = () => import('../components/pixi/graphic');
// const Index = require('../components/pixi/index')
Vue.use(Router);

export default new Router({
    routes: [
    {
        path: '/',
        component: sprite
    },
    {
        path: '/progress',
        component: progress
    },
    {
        path: '/spriteFromImg',
        component: spriteFromImg
    },
    {
        path: '/graphic',
        component: graphic
    }
    ]
})