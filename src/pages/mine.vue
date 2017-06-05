<template>
    <div class="mine">
        <div class="top">
         
           <div class="lp"></div>
            <p>登录/注册</p>
        </div>
        <div class="ding">
            <span>全部订单</span>我的订单
        </div>
        <ul>
            <li>
                <img src="../../static/img/nav-1_f74ca94.png" alt="">
                <p>待付款</p>
            </li>
            <li>
                 <img src="../../static/img/nav-2_a05a641.png" alt="">
                <p>待收货</p>
            </li>
            <li>
                <img src="../../static/img/nav-4_42676a4.png" alt="">
                <p>退换修</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "mine",

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
        height: .47rem;
        background: #fff;
        font-size: .16rem;
        line-height: .47rem;
        text-indent: .2rem;
        position: relative;
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
        background-size:15%; 
        text-indent: 0;
    }
    .mine ul{
        margin-top: 1px;
        display: flex;
        justify-content:space-around;
        align-items:center;
        background: #fff;
    }
    .mine li{
        flex:1;
        text-align: center;
        width: 33.3%;
        height: 1.02rem;
    }
</style>