<template>
  <div id="app">
      <div class="tabbar">
        <router-link to="/home">home</router-link>
        <router-link to="/market">market</router-link>
        <router-link to="/cart">cart</router-link>
        <router-link to="/mine">mine</router-link> 
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
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, .7);
 }
 #app .tabbar a{
  color: #fff;
 }
</style>
