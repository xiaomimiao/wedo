/*
* @Author: anchen
* @Date:   2017-06-02 11:23:33
* @Last Modified by:   anchen
* @Last Modified time: 2017-06-08 09:46:03
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
import sou from '../pages/sou'
import detial from '../pages/detial'
import dingdan from '../pages/dingdan'
import shouhou from '../pages/shouhou'
import xuanze from '../pages/xuanze'
// 定义路由规则
const routes = [
    {path: '', component: home},
    {path: '/home', component: home},
    {path: '/market', component: market},
    {path: '/cart', component: cart},
    {path: '/mine', component: mine},
    {path: '/login', component: login},

    {path: '/sou', component: sou},
    {path: '/detial', component: detial},
    {path: '/dingdan', component: dingdan},
    {path: '/shouhou', component: shouhou},
    {path: '/xuanze', component: xuanze},

];


//导出创建好的router对象
export default new VueRouter({
    routes,
    
})



