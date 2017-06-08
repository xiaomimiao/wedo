<template>
  <div  id="detial">
        <good-detial></good-detial>
  </div>
</template>

<script>
import goodDetial from '../components/goodDetial'
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
//         this.axios.get("this.$router.parmrs.id",{}).then( res => {
//             console.log(res);
//         })

    },

    components:{ goodDetial }




  })
</script>

<style scoped>

</style>
