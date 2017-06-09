<template>
    <div class="mine">
        <div class="top">

           <div class="lp"></div>
            <p>登录/注册</p>
        </div>
        <div class="ding" @click='ding_dan(push)'>
             <span >全部订单</span> <i>我的订单</i>
        </div>
        <ul>
            <li  @click='ding_dan(push)' scopted>
                <img src="../../static/img/nav-1_f74ca94.png" alt="">
                <p>待付款</p>
            </li>
            <li  @click='ding_dan(push)' scopted>
                 <img src="../../static/img/nav-2_a05a641.png" alt="">
                <p>待收货</p>
            </li>
            <li  @click='shou_hou(xiu)'>
                <img src="../../static/img/nav-4_42676a4.png" alt=""  >
                <p>退换修</p>
            </li>
        </ul>
        <div class="item">
            我的优惠
            <img src="../../static/img/arrow_3c64abd.png" alt="">
        </div>
        <div class="menu fuwu"  @click="mine_service">
            服务中心
            <img src="../../static/img/arrow_3c64abd.png" alt="">
        </div>
        <div class="menu jia">
            小米之家
            <img src="../../static/img/arrow_3c64abd.png" alt="">
        </div>
        <div class="menu set">
            设置
            <img src="../../static/img/arrow_3c64abd.png" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        name: "mine",
        data(){
        	return{
        	 push:0,
        	 xiu:0

        	}
        },
        methods:{
            ding_dan(item) {
                this.$router.push({
		        path: '/dingdan'// 路径


            })
       },
           shou_hou(tem){
           	    this.$router.push({
           	     path:'/shouhou/'
           	    })
       },
          mine_service(){
            this.$router.push('/service')
          }
    }
}
</script>

<style>
    .mine{
        width: 100%;
        height: 7.36rem;
        background: #f5f5f5;
    }
    .mine .top{
       width: 100%;
       height: .92rem;
       background: url(../../static/img/bg_0425a88.png) no-repeat #f37d0f;
       background-size:cover;
    }
    .mine .top p{
        font-size: .14rem;
        color: #fff;
        display: inline-block;
        position: relative;
        top: -0.5rem;
        left: 0;
    }
    .mine .lp{
        display: inline-block;
        width: .56rem;
        height: .56rem;
        background:#f37d0f url(../../static/img/avatar_e29d6cb.png) no-repeat ;
        background-size:100%;
        position: relative;
        top: -0.3rem;
        left: .16rem;
   }
    .mine .ding{
        color: rgba(0,0,0,.87);
        width: 100%;
        height: 0.47rem;
        background: #fff;
        font-size: .16rem;
        line-height: .47rem;
        text-indent: .2rem;
        position: relative;
        overflow: hidden;
    }
    .mine .ding  i{
    	font-style:normal;
    }
    .mine .ding span{
        position: absolute;
        top: .13rem;
        right: .2rem;
        width: .8rem;
        height: .2rem;
        line-height: .2rem;
        font-size: .14rem;
        color: rgba(0,0,0,.54);
        background: url(../../static/img/arrow_3c64abd.png) no-repeat right center;
        background-size:10%;
        text-indent: 0;
    }
    .mine ul{
        margin-top: 1px;
        display: flex;
        justify-content:space-around;
        align-items:center;
        background: #fff;
         overflow: hidden;
    }

    .mine li{
        flex:1;
        text-align: center;
        width: 33.3%;
        height: 1.02rem;
        position: relative;
        top: -0.6rem;
        left: 0;
    }
    .mine li img{
        width: .26rem;
        height: .26rem;
    }
    .mine li p{
        font-size: .14rem;

    }
    .mine .item{
        margin-top: .08rem;
        margin-bottom: .08rem;
        width: 100%;
        height: .6rem;
        line-height: .6rem;

        background: url(../../static/img/i-wallet_13a8fda.png) .15rem .1rem no-repeat;
        font-size: .16rem;
        background-color:#fff;
        background-size:7%;
        text-indent: .7rem;
        position: relative;
    }
    .mine .item img, .mine .menu img{
        height: 0.22rem;
        width: 0.13rem;
        position: absolute;
        top: 0.19rem;
        right: 0.2rem;
    }
    .mine .menu{
        margin-top: 1px ;
        background: #fff;
        font-size: .16rem;
        width: 100%;
        height: .6rem;
        line-height: .6rem;
        position: relative;
        text-indent: .7rem;
    }
    .mine .set{
        margin-top: .08rem;
        background: url(../../static/img/i-setting_4ddebe5.png) no-repeat .15rem .1rem #fff;
        background-size:7%;
    }
    .mine .fuwu{
        background: url(../../static/img/i-service_7b9f412.png) no-repeat .15rem .1rem #fff;
        background-size:7%;
    }
    .mine .jia{
        background: url(../../static/img/i-mihome_c836072.png) no-repeat .15rem .1rem #fff;
        background-size:7%;
    }
</style>
