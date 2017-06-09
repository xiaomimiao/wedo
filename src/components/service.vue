<template>
  <div class="service">
    <div  class="service_head">
      <img src="../../static/img/icon_back_n.png" alt=""  @click="hui()">
      <h2>服务</h2>
      <img src="../../static/img/search.png" alt="" @click="sou()">
    </div>
    <div  class="service_img">
         <img  src="../../static/img/banner1228.jpg" alt="">
    </div>
    <div  class="service_ul">
        <ul>
            <li>小米之家</li>
            <li>零售网点</li>
            <li>服务网点</li>
            <li>售后服务单</li>
            <li>售后服务政策</li>
            <li>防伪查询</li>
            <li>安装服务</li>
            <li>在线客服</li>
            <p class="myP"></p>
        </ul>
    </div>
    <div  class="service_phone">
      <p>致电客服专家 400-100-5678</p>
    </div>
  </div>
 </template>
<script>
     export default({
          name:'service',
          data(){
            return{
              data:[]
            }
          },
          methods:{
            hui(){
               this.$router.push('/mine')
            },
            sou(){
               this.$router.push({path:'/sou'})
            }
          }

     })
</script>
<style>
  .service_head{
    width:100%;
    height:0.483rem;
    line-height:0.483rem;
    background:#f2f2f2;
    z-index:2;
    overflow:hidden;
  }
  .service_head img:first-of-type{
    float:left;
    height:0.253rem;
    width:0.254rem;
    margin:0.15rem;
  }
  .service_head h2{
    font-weight: 400;
    font-size:0.1562rem;
    color:#666;
    float:left;
    text-indent:1rem;

  }
  .service_head img:last-of-type{
    height:0.253rem;
    width:0.254rem;
    float:left;
    margin:0.15rem 0 0 1.8rem;
  }
  .service_img{
    height:1.15rem;
    overflow:hidden;
    width:100%;
  }
  .service_img img{
    width:100%;
    height:1.15rem;
  }
  .service_ul{
    background: #f5f5f5;
  }
  .service_ul  ul li{
    background:url(../../static/img/arrow_3c64abd.png) no-repeat right  red;
    height:0.46rem;
    line-height:0.46rem;
    border-bottom:1px solid #f2f2f2;
    padding:0 0.115rem;
    font-size:0.1725rem;
    background:white;
  }
  .service_ul ul li:last-of-type{
    margin-top:0.115rem;
    border-bottom:none;
    height:0.46rem;
  }
  .myP{
    width:100%;
    height:0.115rem;
  }
  .service_phone p{
      font-size:0.1265rem;
      text-align:center;
      margin-top:0.2rem;
      color:#999;
  }
</style>
