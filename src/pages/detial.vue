<template>
  <div  id="detial">

        <good-detial></good-detial>
        <price></price>
        <publics></publics>


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
                data:[],
                data:{}
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
        },
        components: { goodDetial,price,publics }

  })
</script>

<style scoped>

</style>
