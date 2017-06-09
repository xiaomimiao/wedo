<template>
  <div  id="detial">
    <img :src="getObj.img_url" :style="{width:'100%'}" alt="">
    <h2 :style="{fontSize:'.3rem', color: '#333', textIndent: '.5rem'}">{{ getObj.product_name }}</h2>
    <ul class="tab">
        <li @click="tiao()"><p></p>首页</li>
        <li @click="gou()"><p></p>购物车</li>
        <li @click="xuan(getObj)">加入购物车</li>
        <li @click="xuan(getObj)">立即购买</li>
    </ul>

<<<<<<< HEAD
    <good-detial></good-detial>
    <price></price>
    <publics></publics>
=======
        <good-detial></good-detial>
        <price></price>
        <publics></publics>
       
>>>>>>> 3d17f30ad6e38d53330324e38a611e99294d51a7

  </div>
</template>

<script>

import goodDetial from '../components/goodDetial'
import price from '../components/price'
import publics from '../components/public'

  export default({
        name : 'detial',
        data(){
            return {
                // id:this.$router.parmrs.id
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
            },
            xuan() {
                this.$router.push({
                    path: '/xuanze'
                })
            }
        },
        created(){
            // this.axios.get("this.$router.parmrs.id",{}).then( res => {
            //     console.log(res);
            // })

        },
        computed: {
            getObj() {
                console.log(this)
                return  this.$store.getters.get
                this.data = this.$store.getters.get
            }
        },
        components: { 
            goodDetial,price,publics
        }
  })
</script>

<style scoped>

</style>
