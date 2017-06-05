<template>
  <div id="app">
      <div class="tabbar">
        <router-link to="/home">首页</router-link>
        <router-link to="/market">分类</router-link>
        <router-link to="/cart">购物车</router-link>
        <router-link to="/mine">我的</router-link> 
      </div>
      <router-view></router-view> 
  </div>
</template>

<script>

export default {
  name: 'app',

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
 }
</style>
