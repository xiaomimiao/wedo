/*
* @Author: anchen
* @Date:   2017-06-02 11:23:33
* @Last Modified by:   anchen
* @Last Modified time: 2017-06-06 11:49:37
*/
// 引入vue
import Vue from 'vue'
// 引入vue-router并安装
import VueRouter from 'vue-router'
// 可以让VueRouter在任何组件中使用
Vue.use(VueRouter)


// 引入组件
import home from '../pages/home'
import market from '../pages/market'
import cart from '../pages/cart'
import mine from '../pages/mine'
import login from '../components/login'

// 定义路由规则
const routes = [
    {path: '', component: home},
    {path: '/home', component: home},
    {path: '/market', component: market},
    {path: '/cart', component: cart},
    {path: '/mine', component: mine},
    {path: '/login', component: login},
];

//导出创建好的router对象
export default new VueRouter({
    routes
})



