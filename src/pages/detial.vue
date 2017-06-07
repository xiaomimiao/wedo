<template>
  <div  id="detial">
    <img src="" alt="">
    <h2>{{ res }}</h2>
    <h2>{{ id }}</h2>
  </div>
</template>

<script>

  export default({
    name : 'detial',

    data(){
      return {
        id:this.$router.parmrs.id
      }
    },

    methods:{


    },

    created(){
        this.axios.get("").then( res => {
            console.log(res);
        })

    }



  })
</script>

<style>

</style>
