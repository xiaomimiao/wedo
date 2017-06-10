<template>
  <div  id="detial">
    <img :src="getObj.img_url" :style="{width:'100%'}" alt=""   alt="" v-if="getObj.img_url?true:false">
    <img :src="getObj.image_url" :style="{width:'100%'}" alt="" v-if="getObj.image_url?true:false">

    <h2 :style="{fontSize:'.2047rem', color: '#333', textIndent: '.5rem',fontWeight:'normal'}">{{ getObj.product_name }}</h2>
    <ul class="tab">
      <li @click="tiao()"><p></p>首页</li>
      <li @click="gou()"><p></p>购物车</li>
      <li>加入购物车</li>
      <li>立即购买</li>
    </ul>
  </div>
</template>

<script>

  export default({
    name : 'detial',

    data(){
      return {

      }
    },

    methods:{
      tiao() {
        this.$router.push({
          path: '/home'
        })
      },
      gou() {
        this.$router.push({
          path: '/cart'
        })
      }

    },
    computed: {
      getObj() {
        console.log(this);
        return  this.$store.getters.get
      }
    }

  })
</script>

<style scoped>
  .tab{
    display: flex;
    width: 100%;
    position: fixed;
    bottom:0;
    height: .55rem;
    background: #fff;
    z-index: 999;
    border-top:1px solid #ccc;
  }
  .tab li:nth-of-type(1){
    font-size: .12rem;
    width: .84rem;
    height: .55rem;
    line-height: .2rem;
    text-align: center;
    border-right: 1px solid #ccc;

  }
  .tab li:nth-of-type(2){
    font-size: .12rem;
    width: .84rem;
    height: .55rem;
    line-height: .2rem;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .tab li:nth-of-type(1) p{
    overflow: hidden;
    width: .28rem;
    height: .28rem;
    margin-top: .05rem;
    margin-left: .28rem;
    background: url(../../static/img/spr1_5b2e09c.png) no-repeat 0 -1.96rem;
    background-size:cover;
  }
  .tab li:nth-of-type(2) p{
    width: .28rem;
    height: .28rem;
    margin-top: .05rem;
    margin-left: .28rem;
    background: url(../../static/img/spr1_5b2e09c.png) no-repeat 0 -1.4rem;
    background-size:cover;
  }
  .tab li:nth-of-type(3){
    width: 1.24rem;
    height: .55rem;
    line-height: .55rem;
    color: #fff;
    font-size: .2rem;
    background-color: #f90;
    text-align: center;
  }
  .tab li:nth-of-type(4){
    width: 1.24rem;
    height: .55rem;
    line-height: .55rem;
    color: #fff;
    font-size: .2rem;
    background-color: #f95b07;
    text-align: center;
  }
</style>
