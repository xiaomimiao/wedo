<template>
     <div  class="public"   >
         <div  class="select"   @click="xuan()">
             <p>已选</p>
             <p>{{ getObj.product_name }}</p>
         </div>
          <div  style="height:0.09rem;background:#f2f2f2"></div>
           <div  class="sole">
               <p>促销</p>
               <p>可分期</p>
           </div>
         <div  style="height:0.09rem;background:#f2f2f2"></div>
         <div  class="address">
             <p>北京北京市东城区永定门外街道</p>
         </div>
         <div  style="height:0.09rem;background:#f2f2f2"></div>


            <div  style="height:0.54rem;"></div>
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
            xuan(){
              this.$router.push('/xuanze')
            }

       },
       created(){


       },
      computed:{
           getObj(){
             console.log(this);
             return  this.$store.getters.get
           }

      }


  })
</script>

<style  scoped>
.public{
  font-size:0.15rem;
}
  .select{
    height:0.75rem;
    width:100%;
  }
  .select p:first-of-type, .sole p:first-of-type{
      height:0.19rem;
      line-height:0.19rem;
      margin:0.184rem 0 0.1rem 0.184rem;
      color: rgba(0,0,0,.54);
  }
  .select p:last-of-type{
      color: rgba(0,0,0,.87);
      margin:0 0 0.1rem 0.184rem;
  }
  .sole p:last-of-type{
      color:#f56600;
      border:1px solid #f56600;
      width:0.5rem;
      text-align:center;
      margin:0 0 0.184rem 0.184rem;
  }
  .address{
    height:0.64rem;
    line-height:0.64rem;
    font-size:0.138rem;
    color: rgba(0,0,0,.87);
  }
  .address p{
    background:url(../../static/img/gps_90d5f88.png) no-repeat 0.184rem center;
    background-size:0.138rem 0.1822rem;
    text-indent:0.45rem;
  }
</style>
