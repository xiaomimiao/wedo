<template>
		<div class="ding_dan">
		     <div class='head'>
		     	 <img src='../../static/img/icon_back_n.png' @click='back'/>
		     	 <p>售后记录</p>
		     	 <img src="../../static/img/search.png"/>
		    </div>
		    <car></car>
		</div>    
</template>
<script>
     import Car from '../components/car.vue' 
	 export default {
        name: "ding_dan",
        data(){
        	return{
        		ha:0
        	}
        },
        methods:{
        	back(){
        		history.back();
        	},
      
        },
        components:{Car}
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
</style>