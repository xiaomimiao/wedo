<template>
   <div  class="price">
     <p  :style="{fontSize:'0.15rem'}"><span>【亮黑色版6月9日早10点预售，预计2~4周内为您发货】</span>{{ data1 }}</p>
     <div  class="price_list"    v-for="item in data.list">
          <h2 >￥{{ getObj.product_price || getObj.price || 100 }}</h2>
     </div>
   </div>
</template>

<script>
  export default({
      name:'price',
      data(){
          return {
            data:[],
            data1:[]
          }
      },
     created(){
         this.axios.get("../../static/xiaomi data/detial.json ").then( res => {

           this.data = res.data.data.commodity_list.list[1].goods_list

          this.data1 = res.data.data.commodity_list.seo.seo_description

           })

     },
    computed: {
      getObj() {
        console.log(this);
        return  this.$store.getters.get
      }
    }


  })
</script>

<style  scoped>
  .price{
    padding:0 0.15rem;

  }
  p{
    font-size:0.138rem;
    color:rgba(0,0,0,.54);
  }
  p span{
    color:rgb(255, 74, 0);
    font-size:0.138rem;
  }
  .price_list h2{
    color: #f56600;
    font-size:0.276rem;
    font-weight:400;
    border-bottom:1px solid #f4f4f4;
    padding-bottom:0.1rem;
  }

</style>
