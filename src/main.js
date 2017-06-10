// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(VueAwesomeSwiper)

import App from './App'
// 将路由引入到router变量中，为了挂载vue实例上
// 如果引入的是文件夹内部的index.js文件，可以不写index
import router from './router'
//import car from ' ../src/components/car'


import Vuex from 'vuex'
Vue.use(Vuex)


// 引入vue-resource
/*import VueResource from 'vue-resource'
// 安装
Vue.use(VueResource)*/

import '../static/reset.css'

// 引入axios解决网络请求
import axios from 'axios'
 //添加到原型上，任何地方都可以访问到
 Vue.prototype.axios = axios 

Vue.config.productionTip = false

/* eslint-disable no-new */



const store = new Vuex.Store({
    state: {
        obj:{},
        price:0,
        count:1
      
       
    },
    mutations: {
        ADDOBJ (state, item) {
            console.log(123);
            state.obj = item
        },
        ADD_PRICE(state,count){

		state.price += count;
		state.count++;
	    },
        DOWN_PRICE(state,count){

			state.price -= count;
			if(state.count>1){
				state.count--
			}
				
	    }
    },
    getters:{
        get(state){
            console.log("456");
            return state.obj;
            return state.count
            
        }
    },
    actions:{

    }
})



new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router, //将路由挂载到实例上
  store

})

const bus = new Vue()
/*Vue.prototype.detial = function(item){
    console.log(this);
    this.$store.commit("ADDOBJ",item)
    this.$router.push({
        path:'/detial'
    })
}*/
