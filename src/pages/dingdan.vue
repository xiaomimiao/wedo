<template>
	<div class="ding_dan">
		     <div class='head'>
		     	 <img src='../../static/img/icon_back_n.png' @click='back'/>
		     	 <p>我的订单</p>
		     	 <img src="../../static/img/search.png" @click='serch(hot)'/>
		    </div>
		    <div class='allShop'>
		         <img src="../../static/img/empty.png" :style="{width:'1.2rem',height:'1.2rem'}"/>
		         <p><span @click='car(ha)'>全部商品</span><span  @click="shoping()">精选商品</span></p>
		    </div>
   </div>
</template>
<script>
    export default {
        name: "ding_dan",
        data(){
        	return{
        		ha:0,
        		hot:0
        	}
        },
        methods:{
        	back(){
        		history.back();
        	},
        car(item) {
                this.$router.push({
		        path: '/cart'// 路径


         })
        },
          serch(seach){
        	this.$router.push({
        	  path:'/search'
        	})
        },
          shoping(){
            this.$router.push('/shopping')
          }


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
    .allShop{
    	width:100%;
    	height:3.32rem;



   }
    .allShop img{
    	margin-left:35%;
    	margin-top: 27%;
    }
    .allShop p{
    	display: flex;
    	font-size: 0.18rem;
    	text-align: center;
    	margin-left:12%;
    	margin-top: 27%;

    }
    .allShop p span:first-of-type{
        display: block;
    	width:1.495rem;
    	height:0.59rem;
        color: #999;
        background:#f4f4f4;
        line-height:0.59rem ;

    }
    .allShop p span:last-of-type{
        display: block;
    	width:1.495rem;
    	height:0.59rem;
        color: white;
        background:#FF5722;
        line-height:0.59rem ;

    }
</style>
