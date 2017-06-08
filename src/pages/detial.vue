<template>
  <div  id="detial">
<<<<<<< HEAD
    <img :src="getObj.img_url" :style="{width:'100%'}" alt="">
    <h2 :style="{fontSize:'.3rem', color: '#333', textIndent: '.5rem'}">{{ getObj.product_name }}</h2>
    <ul class="tab">
        <li @click="tiao()"><p></p>首页</li>
        <li @click="gou()"><p></p>购物车</li>
        <li @click="xuan(getObj)">加入购物车</li>
        <li @click="xuan(getObj)">立即购买</li>
    </ul>
=======

        <good-detial></good-detial>
        <price></price>
        <publics></publics>

>>>>>>> bb855ef11522786ceaf64a56bfc333df6fdd0db6
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
<<<<<<< HEAD
        // id:this.$router.parmrs.id
            data:{}
=======
        data:[]
>>>>>>> bb855ef11522786ceaf64a56bfc333df6fdd0db6
      }
    },
    methods:{
<<<<<<< HEAD
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
=======
>>>>>>> bb855ef11522786ceaf64a56bfc333df6fdd0db6

    },

    created(){
<<<<<<< HEAD
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
    }
=======
>>>>>>> bb855ef11522786ceaf64a56bfc333df6fdd0db6


    },
    components:{ goodDetial,price,publics }

  })
</script>

<style scoped>

</style>
