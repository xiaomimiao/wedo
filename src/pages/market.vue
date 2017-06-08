<template>
  <div class="market">
      <div  class="market_head">
      <img src="../../static/img/icon_back_n.png" alt=""  @click="hui()">
          <h2>商品分类</h2>
          <img src="../../static/img/search.png" alt="" @click="sou()">
      </div>
      <div class="market_left" :style="{clear: 'both'}">
          <ul>

              <li  v-for="(item,index) in data.data"  @click="change_list(item.category_id)" :style="i == item.category_id ? { color: '#fb7d34',fontSize:'0.2rem' } : { color: '#333',fontSize:'0.1562rem' }"  >{{ item.category_name }}</li>

          </ul>
      </div>

    <div  class="market_right">

      <div  v-for="(item,index) in data.data">

        <div  v-for="(market_item,inde) in data.data[index].category_list"    >

          <p  v-show ="market_item.body.category_name != ''" ><span>—</span>{{ market_item.body.category_name }}<span>—</span></p>

            <div style="overflow: hidden;">

              <figure v-for="(market_img,ind) in market_item.body.items"  class="market_small"  style="float:left">

                <img      :src="market_img.img_url" alt=""  :style="{

                  width:market_item.is_show == 'Y' ? 2.875 + 'rem ' : 0.575 +'rem',
                  height:market_item.is_show == 'Y' ? 1.15 +'rem': 0.575 +'rem',
                  }"  v-show="  market_item.is_show == 'Y' "  >

                    <img  :src="market_img.img_url" alt=""  :style="{

                    width:market_item.is_show == 'Y' ? 2.875 + 'rem ' : 0.575 +'rem',
                    height:market_item.is_show == 'Y' ? 1.15 +'rem': 0.575 +'rem',
                    margin:margin

                    }"   v-show="  market_item.is_show != 'Y' "  @click="xiangqing(market_img)">

                    <figcaption v-if="market_img.product_name?true:null">{{ market_img.product_name }}</figcaption>

              </figure>

            </div>

        </div>

      </div>

      </div>

    </div>

</template>

<script>


  export default {
    name: "market",

    data(){
      return{
        left:'left',
        margin:'0 0.15rem',
        data:[],
        i: 0
      }
    },
    methods:{
       change_list(a){

         this.i = a;
       },
       xiangqing (item) {
          console.log(this)
          this.$store.commit("ADDOBJ",item)
          this.$router.push({
            path:'/detial'
          })

       },
      hui(){
        this.$router.push({path:'/home'})
      },
      sou(){
        this.$router.push({path:'/sou'})
      },
    },
    created(){
        this.axios.get('../static/xiaomi data/category_v2.json').then(res =>{
          this.data = res.data
        })
    }

  }

</script>

<style scoped>

.market_head{
  width:100%;
  height:0.483rem;
  line-height:0.483rem;
  background:#f2f2f2;
  z-index:2;
}
.market_head img:first-of-type{
  float:left;
  height:0.253rem;
  width:0.254rem;
  margin:0.15rem;
}
.market_head h2{
  font-weight: 400;
  font-size:0.1562rem;
  color:#666;
  float:left;
  text-indent:1rem;

}
.market_head img:last-of-type{
  height:0.253rem;
  width:0.254rem;
  float:left;
  margin:0.15rem 0 0 1.5rem;
}

  .market_left{
    float:left;
    background-color:#fefefe;
    width:0.8739rem;
    padding:0.115rem 0 0.115rem 0;
    height:5.75rem;
    overflow-y:scroll;
  }
  .market_left ul li{
    font-size:0.1562rem;
    color:#333;
    height:0.4849rem;
    line-height:0.4849rem;
    text-align:center;
  }

  /*a{*/
    /*color:#333;*/
    /*font-size:0.1562rem;*/
  /*}*/

  .market_right{
    float:left;
    width:3.05rem;
    padding:0.02rem 0;
    margin-left:0.2rem;
    height:5.75rem;
    overflow-y:scroll;
    font-size:0.11rem;
  }

  .market_right p{
    width:2.95rem;
    font-size:0.161rem;
    height:0.73rem;
    line-height:0.73rem;
    text-align:center;
  }
  .market_right p span{
    color:#e0e0e0;
    display:inline-block;
  }
  .market_right p span:first-of-type{
    margin-right:0.1rem;
  }
  .market_right p span:last-of-type{
    margin-left:0.1rem;
  }

  .market_small figure{
    width:0.95rem;
  }
  .market_right figure figcaption{
    text-align:center;
    font-size:0.13225rem;
    color:rgba(0,0,0,.54);
    height:0.17rem;
    margin:0.161rem 0 0.15rem 0;
  }

</style>
