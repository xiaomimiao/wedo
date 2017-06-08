<template>
    <div id="list">
        <div class="header" :style="scroll >= 300 ? { background: 'rgb(255, 255, 255)'} : { background: 'rgba(255, 255, 255, 0)' }" >
            <img src="../../static/img/icon_back_n.png" alt="" @click="mgo()">
            <div class="sou">
                搜索商品名称
            </div>    
            <img src="../../static/img/cart_ae7d5a3.png" alt="" @click="gou()">
        </div>
        <div class="top">
            <div v-for="ite in data.sections">
                <div v-for="it in ite.body.items" class="fang" @click="xiangqing(it)">
                    <img  :src="it.img_url" alt="" :style="{width: it.w ? it.w*4.14/720+'rem' : '50%'}">
                    <div class="wenzi" v-if="it.product_name">
                        <p class="pname">{{it.product_name}}</p>
                        <p class="pbrief">{{it.product_brief}}</p>
                        <p class="price">￥<span>{{it.product_price}}</span></p>
                    </div>
                </div>
               
            </div>
        </div>
    
    </div>
</template>
<script>
    export default {
        name: "list",
        data() {
            return {
                scroll: '',
                data: [],
            
            }
        },
        created() {
            this.axios.get('../../static/xiaomi data/list.json').then( res => {
                this.data = res.data.data;
               
            })
        },
        mounted(){
            window.addEventListener('scroll', this.menu)
        },
        methods: {
            menu(){
                this.scroll = document.body.scrollTop;
            },
            mgo() {
                this.$router.push({
                    path:'/home'
                })
            },
            gou() {
                this.$router.push({
                    path:'/cart'
                })
            },
            xiangqing(item) {
                this.$store.commit("ADDOBJ", item)
                this.$router.push({
                    path:'/detial'
                })
            }
        }
    }
</script>
<style scoped lang="less">
    #list{
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background: #f5f5f5;
        overflow-x:hidden;
        overflow-y:auto;
    }
    #list .header{
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        height: .48rem;
        display: flex;
    }
    #list .header img:nth-of-type(1){
        width: .2rem;
        height: .2rem;
        position: absolute;
        top: .14rem;
        left: .13rem;
    }
    #list .header img:nth-of-type(2){
        width: .23rem;
        height: .23rem;
        position: absolute;
        top: .13rem;
        right: .13rem;
    }
    #list .header .sou{
        position: absolute;
        top: .08rem;
        left:.46rem;
        right:.46rem;
        height: .34rem;
        line-height: .34rem;
        text-indent: .4rem;
        font-size: .14rem;
        color: #9C9C9C;
        border:1px solid rgb(227, 227, 227);
        border-radius: .05rem;
        background: url(../../static/img/search333_5ab6d3c.png) no-repeat;
        background-size:cover; 
    }
    #list .top img{
        display: block;
    }
    #list .top .fang{
        height: 2.07rem;
        width: 100%;
        overflow: hidden;
        img{
            float: left;
        }
    }
    #list .top>div:first-child .fang{
        height: 2.94rem;
    }
    #list .top .wenzi{
        float: right;
        width: 50%;
        height: 2.07rem;
        background: #fff;
        padding: 0.42rem 0.08rem 0 0.24rem;
         box-sizing: border-box;
    }
    #list .top .pname{
        font-size: .16rem;
        color: rgba(0,0,0,.87);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #list .top .pbrief{
        margin-top: .03rem;
        font-size: .12rem;
        line-height: .18rem;
        color: rgba(0,0,0,.54);
    }
    #list .top .price{
        font-size: .15rem;
        color: #ff6000;
        margin-top: .03rem;
        position: relative;
        margin-left: .12rem;
        span{
            font-size: .18rem;
            margin-top: 0.06rem;
        }
    }
    #list .top>div:nth-child(3),#list .top>div:nth-child(13){
        position: relative;
        overflow: hidden;
        height: 2.92rem;
        width: 100%;
        margin: 0.09rem 0;
    }
    #list .top>div:nth-child(13),#list .top>div:nth-child(13) img{
        height: 2.07rem;
        width: 200%;
    }
    #list .top>div:nth-child(13){
        margin-bottom: 2.16rem;
        clear: both;
    }
    #list .top>div:nth-child(13) .wenzi{
        position: absolute;
        top: 2.07rem;
        left: 0;
        width: 4.14rem;
        height: 2.07rem;
        background: #fff;
    }
    #list .top>div:nth-child(3)>div:first-child{
        float: left;
        width: 2.058rem;
        height: 2.92rem;
        img{
            display: block;
        }
    }
    #list .top>div:nth-child(3)>div:nth-child(2){
        float: right;
        width: 2.058rem;
        height: 1.449rem;
        img{
            display: block;
        }
    }
    #list .top>div:nth-child(3)>div:nth-child(3){
        float: right;
        width: 2.058rem;
        height: 1.45rem;
        img{
            display: block;
        }
        margin-top: 0.02rem;
    }
</style>