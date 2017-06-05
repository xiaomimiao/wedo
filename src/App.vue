<template>
  <div id="app">
      <div class="tabbar">
        <router-link to="/home" @click="xuan()"><p></p>首页</router-link>
        <router-link to="/market"><p></p>分类</router-link>
        <router-link to="/cart"><p></p>购物车</router-link>
        <router-link to="/mine"><p></p>我的</router-link> 
      </div>
      <router-view></router-view> 
  </div>
</template>

<script>

export default {
  name: 'app',
  methods:{
    xuan() {
    
    }
  }
}

</script>

<style>
 #app .tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: .52rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  z-index: 99;
  border-top: 1px solid #e0e0e0;
 }
 #app .tabbar a{
  display: block;
  width:25%;
  height: .52rem;
  text-align: center;
  line-height: .70rem;
  color: #333;
  font-size: .12rem;
  text-decoration: none;
  position: relative;
 }
 #app .tabbar a p {
  width:.23rem;
  height: .23rem;
  position: absolute;
  top: .05rem;
  left:.4rem;
  /*background: #f00;*/
      

 }
  #app .tabbar a:nth-of-type(1) p{
    background: url(assets/img/spr1_5b2e09c.png) no-repeat 0 -0.23rem;
    background-size:100%; 
  }
   #app .tabbar a:nth-of-type(2) p{
    background: url(assets/img/spr1_5b2e09c.png) no-repeat 0 -0.69rem;
    background-size:100%; 
  }
   #app .tabbar a:nth-of-type(3) p{
    background: url(assets/img/spr1_5b2e09c.png) no-repeat 0 -1.15rem;
    background-size:100%; 
  }
   #app .tabbar a:nth-of-type(4) p{
    background: url(assets/img/spr1_5b2e09c.png) no-repeat 0 -1.61rem;
    background-size:100%; 
  }
</style>
