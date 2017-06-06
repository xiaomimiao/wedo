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
            
        </div>

        <!-- <div class="zaobao">
            <img :src="data1.title_logo_url" alt="">
            <ul>
                <li v-for="key in data">{{ key.sections[0].body.items.news_title }}</li>
            </ul>
        </div> -->

        <!-- <div class="zuigao">
            <ul>
                <li>
                    <img :src="data.sections[3].body.items[0].img_url" alt="" style="">
                </li>
                <li>
                    <img :src="data.sections[3].body.items[1].img_url" alt="">
                    <img :src="data.sections[3].body.items[2].img_url" alt="">
                </li>
            </ul>
        </div> -->

        <!-- <ul class="lijian">
            <li>
                <img :src="data.sections[5].body.items[0].img_url_webp" alt="">
            </li>
        </ul> -->

       <!--  <div class="mingxing">
            <img :src="data.sections[7].body.items[0].img_url" alt="">
            <ul>
                <li v-for="">
                    <dl>
                        <dd v-for="key in data.sections[9].body.items">
                            <img :src="key.img_url" alt="">
                        </dd>
                        <dt>{{ key.product_name }}</dt>
                        <dt>{{ key.product_brief }}</dt>
                        <dt>{{ key.product_price }}</dt>
                    </dl>
                </li>
            </ul>
        </div> -->


        <div class="dibu">
            
        </div>


    </div>
</template>

<script>
    export default {
        name: "home",
        data () {
            return{
                data: [], data1: [] /*data2: [], data3: [], data4: [], data5: [], data6: [], data7: [], data8: [], data9: [], data10: [], data11: [], data12: [], data13: [], data14: [], data15: [], data16: [], data17: [], data18: [], data19: [], data20: [], data21: [], data22: [], data23: [], data24: [], data25: [], data26: [], data27: [], data28: [], data29: [], data30: [], data31: [], data32: [], data33: [], data34: [], data35: [], data36: [], data37: [], data38: [], data39: []*/
            }
        },
        created () {
            this.axios.get('../../static/xiaomi data/index3.json').then(res => {
                console.log(res.data.data)
                this.data = res.data.data;
                this.data1 = res.data.data.sections[0].body;
            })
        },
        methods: {
            sou(){

            }
        }

        


    }

</script>

<style scoped lang="less">
    .home{
        width: 100%;
        background: #f5f5f5;
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
            height: 0.43rem;
            margin-top: 0.015rem;
            background: yellow;
            display: flex;
            margin-bottom: 0.09rem;
            img{
                height: 0.46rem;
                width: 0.86rem;
            }
            ul>li{
                height: 0.16rem;
                line-height: 0.16rem;
                margin: 0.15rem 0;
                width: 3rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 0.14rem;
                padding-left: 0.1rem;
                border-left: 0.01rem solid #b2b2b2;
            }
        }

        .zuigao{
            height: 2.92rem;
            background: #fff;
            margin-bottom: 0.09rem;
            width: 100%;
        }
        .zuigao>ul{
            display: flex;
            justify-content: space-between;
        }
        .zuigao>ul>li{
            height: 2.92rem;
            width: 2.058rem;
        }
        .zuigao>ul>li:first-child img{
            height: 2.92rem;
            width: 2.058rem;
        }
        .zuigao>ul>li:last-child img{
            height: 1.449rem;
            width: 2.058rem;
            display: block;
        }
        .zuigao>ul>li:last-child img:first-child{
            margin-top: 0.02rem;
        }

        .lijian,.lijian img{
            height: 1.61rem;
            width: 100%;
        }

        .mingxing{
            margin: 0.09rem 0 0.01rem;
        }
        .mingxing,.mingxing img{
            height: 2.53rem;
            width: 100%;
        }




        .dibu{
            height: 3rem;
        }

    }
</style>
