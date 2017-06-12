<template>
	    <div>
	   <div class="hongmi">
                <img :src="getObj.img_url || getObj.image_url" alt="">
                <div class="jshao">
                    <p>￥<span>{{ getObj.product_price || getObj.market_price || 3499 }}</span></p>
                    <p>{{ getObj.product_name ||  getObj.name}}</p>
                </div>
     </div>
     <div class="gou">
                <span @click='redueOne()'><img src="../../static/img/jian.png" alt="" ></span>
                <span>{{this.$store.state.count}}</span>
                <span @click='addOne()'><img src="../../static/img/add.png" alt=""></span>
     </div>
	 </div>
</template>
<script>
	    export default({
        name : 'ss',
        data(){
          return {
            data:'',

          }
        },
        methods:{
            addOne(){
            	 this.$store.commit({
            	 	type:'ADD_PRICE',
            	 })
            	
            	
            },
            redueOne(){
            	 this.$store.commit({
            	 	type:'DOWN_PRICE',
            	 })
            	
            }

        },
        computed: {
            getObj() {
//              console.log(this.$store.getters.get)
                return  this.$store.getters.get
//              console.log(this.$store.state.count)
                
            }
        }
  })
	
</script>
<style>
	
	
</style>