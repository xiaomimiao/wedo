<template>
  <div class="market">
    <div  class="market_head">
      <h2>产品分类</h2>
    </div>
    <div class="market_left">
      <ul v-for="item in data">
        <li>{{ item.category_name }}</li>
      </ul>
    </div>
    <div  class="market_right">
      <div  v-for="item in data.category_list">
        <img src="{ item.body }" alt="">
        <span></span>
        <figure>
          <img src="" alt="">
          <figcaption></figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>


  export default {
    name: "market",
    data(){
      return{
        data:[]
      }
    },
    created(){
      this.axios.get('../static/xiaomi data/category_v2.json').then(res =>{
        this.data = res.data.data
    })
    }

  }

</script>

<style scoped>

  .market_head{
    width:100%;
    height:0.483rem;
    line-height:0.483rem;
    text-align:center;
    background:url(../../static/img/icon_back_n.png) 0.15rem center no-repeat ,url(../../static/img/search.png) no-repeat 3.7rem center #f2f2f2;;
    background-size:0.253rem 0.253rem;
  }
  .market_head h2{
    font-weight: 400;
    font-size:0.1562rem;
    color:#666;
  }
  .market_left{
    float:left;
    background-color:#fefefe;
    width:0.8739rem;
    padding:0.115rem 0.1725rem 0.115rem 0;
  }
  .market_left ul li{
    font-size:0.1562rem;
    color:#333;
    height:0.4849rem;
    line-height:0.4849rem;
    text-align:center;
  }
  .market_right{
    float:left;
    width:3.0822rem;
  }
</style>
