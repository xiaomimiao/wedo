<template>
    <div  class="shopping">
          <div   v-for="item in data"  class="shopping_list">
                <img  :src="item.body.img_url" alt="">
                <div  class="shopping_word">
                    <p><span>{{ item.body.product_name}}</span><span>{{ item.body.product_price}}</span></p>
                    <p>{{ item.body.product_brief }}</p>
                </div>
          </div>
    </div>
</template>

<script>
  export default {

    data() {
      return {

        data: []

      }
    },
    created() {

      this.axios.get('../../static/xiaomi data/shopping.json').then( res => {

        this.data = res.data.data.sections

            console.log(this.data)
        })
    }
  }
</script>

<style>
.shopping_list img{
    height:2.58rem;
    width:100%;
}
.shopping_word{
  padding:0.184rem;
}
.shopping_word p:first-of-type{
   font-size:0.161rem;
  color:#333;
}
.shopping_word p:first-of-type span:first-of-type{
   /*margin-right:1.5rem;*/
}
.shopping_word p:first-of-type span:last-of-type{
   color: #FF5722;
}
.shopping_word p:last-of-type{
    font-size:0.161rem;
  }
  .shopping_word p:last-of-type{
    font-size:0.138rem;
    color: #999;
  }
</style>

