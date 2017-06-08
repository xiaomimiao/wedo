<template>
     <div  class="public">
          <p>已选</p>
          <p>{{ getObj.product_name }}</p>
     </div>
</template>

<script>
  export default({
       name:'public',
       data(){
            return {
              data:[]
            }
       },
       methods:{


       },
       created(){


       },
      computed:{
           getObj(){
//             console.log(this);
             return  this.$store.getters.get
           }

      }


  })
</script>

<style>
.public{
  font-size:0.15rem;
}
</style>
