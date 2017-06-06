<template>
    <div class="home">
        <div class="header">

            <img src="../../static/img/logo.png" alt="">
            <div class="sou" @click="sou()">
                <input type="text" value="搜索商品名称">
            </div>
            <span>登录</span>
        </div>
        <div class="lunbo">
            <swiper :imglist="imglist"></swiper>
        </div>
        <div class="zaobao">
            <img src="../../static/img/sczb_ed0a4af.png" alt="">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Swiper from "../components/swiper.vue"

    export default {
        name: "home",
        data(){
            return {
                imglist: [{url: "../../static/img/sczb_ed0a4af.png"}, {url: "../../static/img/sczb_ed0a4af.png"}]
            }
        },
        methods: {
            sou(){

            }
        },

        components: {
            Swiper
        }
        
    }

</script>

<style scoped lang="less">
    .home{
        width: 100%;
        .header {
            position: fixed;
            display: flex;
            top: 0;
            left: 0;
            right: 0;
            height: 0.48rem;
            background: rgb(229, 131, 53);
        }
        .header>img{
            height: 0.18rem;
            width: 0.29rem;
            margin: 0.15rem 0.15rem 0;
        }
        .header .sou{
            height: 0.3rem;
            width: 2.99rem;
            margin-top: 0.09rem;
            border-radius: 0.02rem;
            background: url(../../static/img/search_bfba941.png) no-repeat 0 0;
            background-size: cover;
            position: relative;
            input{
                border: none;
                outline: none;
                font-size: 0.15rem;
                position: absolute;
                top: 0.06rem;
                left: 0.36rem;
                color: rgba(0,0,0,.3);
            }
        }
        .header span{
            height: 0.2rem;
            color: #fff;
            font-size: 0.16rem;
            position: relative;
            top: 0.14rem;
            right: -0.12rem;
        }

        .lunbo{
            height: 2.94rem;
            background: hotpink;
        }

        .zaobao{
            height: 0.46rem;
            background: red;
            display: flex;
            img{
                height: 0.43rem;
                width: 0.86rem;
            }
        }

    }
</style>
