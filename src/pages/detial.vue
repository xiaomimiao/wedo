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
        data:[]
      }
    },
    methods:{

    },

    created(){


    },
    components:{ goodDetial,price,publics }

  })
</script>

<style scoped>

</style>
