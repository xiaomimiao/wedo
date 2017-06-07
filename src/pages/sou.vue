<template>
    <div class="sou">
        <header>
             <span @click="shouye()"></span>
             <input type="text">
             <img src="../../static/img/search.png" alt="">
        </header>

        <div class="remen">
            热门搜索
        </div>

        <div class="mifen">
            <img :src="data" alt="">
        </div>

        <ul class="list">
            <li v-for="item in data1" :style="{'border-color':item.border_n,'background-color':item.back_n,color:item.font_n}">
                {{ item.word }}
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                data: [], data1: [],  
            }
        },
        created(){
            this.axios.get('../../static/xiaomi data/sou.json').then(res => {
                 this.data = res.data.data.ad_list[0].body.items[0].img_url;
                 this.data1 = res.data.data.keywords;         
            })
        },
        methods: {
            shouye() {
               this.$router.push({path: '/home'})
            }
        }
    }
</script>

<style scoped lang="less">
    .sou{
        width: 100%;
        font-size: 0.16rem;
        header{
            height: 0.527rem;
            width: 100%;
            background: #F2F2F2;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2;
            display: flex;
        }
        header span:first-child{
            display: inline-block;
            height: 0.29rem;
            width: 0.29rem;
            margin: 0.12rem;
            background: #F2F2F2 url(../../static/img/spr1_5b2e09c.png) no-repeat 0 -2.04rem;
            background-size: cover;
        }
        header input{
            height: 0.3rem;
            line-height: 0.21rem;
            width: 3.02rem;
            margin-top: 0.09rem;
            color: #333;
            border: 1px solid #ccc;
            outline: none;
            font-size: 0.2rem;
        }
        header img:last-child{
            height: 0.28rem;
            width: 0.32rem;
            margin: 0.11rem;
        }

        .remen{
            margin-top: 0.527rem;
            height: 0.46rem;
            font-size: 0.13rem;
            color: #333;
            line-height: 0.46rem;
            margin-left: 0.17rem;
        }

        .mifen,.mifen img{
            height: 1.15rem;
            width: 100%;
        }

        .list{
            display: flex;
            padding: 0 0.1rem;
            li{
                height: 0.36rem;
                line-height: 0.36rem;
                font-size: 0.14rem;
                padding: 0 0.1rem;
                border: 1px solid;
                margin: 0.1rem 0.05rem;
            }
        }
    }
</style>