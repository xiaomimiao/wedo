<template>
    <div class="cart">
	      <div class='for_you'>
	      	   <p>为你推荐</p>
	      </div>
	      <div class="list_img">
	            <ul class='list_img_ul'>
	                <li v-for='item in data.recom_list'>
	                   <img :src='item.image_url' :style="{width:'2.04rem',height:'2.04rem'}" @click='xiangqing(item)'>
	                   <div class='price_div'>	
		                   <p>{{item.name}}</p>
		                   <p class='price'><span>￥{{item.price}}</span><span>￥{{item.market_price}}</span></p>
	                   </div>
	               </li>
	            </ul>
	      </div>
	      <div class='kong'></div>
    </div>
</template>
<script>
    export default {
        name: "cart",
        data(){
        	return{
        		data:[],
        		item:0
        	}
        },
        methods:{
        xiangqing (item) {
          console.log(this)
          this.$store.commit("ADDOBJ",item)
          this.$router.push({
            path:'/detial'
          })

       }
       },
        created(){
        	  this.axios.get('../static/xiaomi data/recommendBlan.json' ).then(res => {
                // 将获取的数据放在data中
                this.data = res.data.data;
                console.log(this.data)
        })
    }
}
</script>
<style>


    .for_you{
    	width:100%;
    	height:0.46rem;
    	font-size: 0.18rem;
    	line-height:0.46rem;
    	text-indent:0.2rem;
    	color:rgba(0,0,0,.87);
    }
    .price_div{
    	width:100%;
    	height: 0.65rem;
    	padding-top: 0.1rem;
    	text-indent: 0.15rem;
    }
    .price{
    	padding-top: 0.1rem;
    }
    .price span:first-of-type{
    	color:#ff6000;
    	
    }
    .price span:last-of-type{
    	font-size: 0.12rem;
        text-decoration: line-through;
        
    }
    .list_img{
    	width:100%;
    }
    .list_img_ul{
    	width:100%;
    	display: flex;
    	flex-wrap: wrap;
    	justify-content: space-around;
    	font-size: 0.16rem;
    	
    }
    .kong{
    	width:100%;
    	height: 1rem;
    }

</style>
	