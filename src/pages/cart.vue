<template>
    <div class="cart">
	      <div class="head">
	      		<img src="../../static/img/icon_back_n.png" />
		        <p>购物车</p>
		        <img src="../../static/img/search.png" />
	      </div>
	      <div class="go_guang">
	  	       <img src="../../static/img/cartnull_0de91f1.png">
	  	       <p>购物车还是空的</p>
	  	       <p>去逛逛</p>
	      </div>
	      <div class='for_you'>
	      	   <p>为你推荐</p>
	      </div>
	      <div class="list_img">
	            <ul class='list_img_ul'>
	                <li v-for='item in data.recom_list'>
<<<<<<< HEAD
	                   <img :src='item.image_url' >



	                </li>



=======
	                   <img :src='item.image_url' :style="{width:'2.04rem',height:'2.04rem'}">
	                   <div class='price_div'>	
		                   <p>{{item.name}}</p>
		                   <p class='price'><span>￥{{item.price}}</span><span>￥{{item.market_price}}</span></p>
	                   </div>
	               </li>
>>>>>>> 3976428e807a6d3ec6d607fd6502d13b64f5c82c
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
        		data:[]
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
    .head{
    	display: flex;
    	height:0.48rem;
    	width:100%;
    	background:#f2f2f2;
    	font-size:.17rem;
    	font-weight:400;
    	text-align:center;
    	line-height:0.48rem;
    	justify-content:space-around;
    	color:#666;
    }
    .head img{
    	height:0.253rem;
    	width:0.253rem;
    }
    .head img:first-of-type{
    	margin-left:-0.6rem;
    	margin-top: 0.1rem;

    }
    .head img:last-of-type{
    	margin-right:-0.6rem;
    	margin-top: 0.1rem;
    }
    .go_guang{
    	display: flex;
    	font-size:0.14rem;
    	height:0.598rem;
    	width:100%;
    	background:#ebebeb;
    	line-height: 0.598rem;
    	justify-content:center;
    }
    .go_guang img{
    	width:0.46rem;
    	height:0.46rem;
    	margin-top:0.05rem;
    	margin-right: 0.07rem;
    }
    .go_guang p:first-of-type{
    	color:rgba(0,0,0,.27);

    }
    .go_guang p:last-of-type{
    	width: 0.71rem;
    	height:0.2875rem;
    	line-height: 0.2875rem;
    	text-align: center;
    	border: 1px solid rgba(0,0,0,.15);
    	margin-top:0.15rem ;
    	margin-left: 0.1rem;
<<<<<<< HEAD
    }
</style>
=======
    } 
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
>>>>>>> 3976428e807a6d3ec6d607fd6502d13b64f5c82c
