<template>
  <div>
	 <div ref='hiden'>
			  <div class="head">
			  		<img src="../../static/img/icon_back_n.png" />
			        <p>购物车</p>
			        <img src="../../static/img/search.png" />
			  </div>
			  <div class="go_guang">
			       <img src="../../static/img/cartnull_0de91f1.png">
			       <p>购物车还是空的</p>
			       <p @click='shouye(fan)'>去逛逛</p>
			  </div>
			<div>
				<car></car>
		   </div>
   </div> 
	<div v-show='isA' class="wu">
		         <wu></wu>
		         <p @click='delet()'>删除</p>
	 </div>
</div>	
</template>
<script>
    import Car from '../components/car.vue'
    import Wu from '../components/wupin.vue'
	export default({
	    data(){
        	return{
        		data:[],
        		fan:0,
        		isA:true,
        		flag:true
        	}
        },
       methods:{
            shouye(item) {
                this.$router.push({
		        path: '/home'// 路径
						

         })
       },
       delet() {
              this.isA=!this.isA;

       }
       },
      
	  components:{Car,Wu},
	  computed: {
            getObj() {
//              console.log(this.$store.getters.get)
                return  this.$store.getters.get

            }
        }
	})
</script>
<style>
     .wu{
     	position:absolute;
     	left:0;
     	right:0;
     	top:0;
     	bottom:0;
     	width:100%;
     	height:100%;
     	background:white;
     	z-index:33
     }
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

    }
    
    
    



</style>