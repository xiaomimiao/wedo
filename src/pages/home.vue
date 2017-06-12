<template>
    <div class="home">

        <div class="header" :style="scroll >= 294 ? { background: 'rgb(229, 131, 53)'} : { background: 'rgba(0,0,0,0)' }" >
            <img src="../../static/img/logo.png" alt="">
            <div class="sou" @click="sou()">
                <input type="text" value="搜索商品名称">
            </div>
            <span>登录</span>
        </div>

        <div class="lunbo" @click="tupian()">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="item in imglist">
                    <img :src="item.img_url">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="dian">
                    <div class="swiper-pagination" slot="pagination"></div>
                </div>
            </swiper>

        </div>

        <div class="zaobao">
            <img :src="data.title_logo_url" alt="">
            <ul>
                <li v-for="key in data.items">{{ key.news_title }}</li>
            </ul>
        </div>

        <div class="zuigao">
            <ul>
                <li>
                    <img :src="data3_1.img_url" alt="" style=""  @click="tupian()">
                </li>
                <li>
                    <img :src="data3_2.img_url" alt=""  @click="tupian()">
                    <img :src="data3_3.img_url" alt=""  @click="tupian()">
                </li>
            </ul>
        </div>

        <ul class="lijian" @click="tupian()">
            <li>
                <img :src="data5.img_url_webp" alt="" >
            </li>
        </ul>

        <div class="mingxing">
            <img :src="data7.img_url" alt="" @click="xiangqing(data7)">
            <ul>
                <li>
                    <dl v-for="key in data9.items" @click="xiangqing(key)">
                        <dd>
                            <img :src="key.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ key.product_name }}</dt>
                            <dt>{{ key.product_brief }}</dt>
                            <dt>￥{{ key.product_price }}</dt>
                        </div>
                    </dl>
                </li>
                <li>
                    <dl v-for="key in data10.items" @click="xiangqing(key)">
                        <dd>
                            <img :src="key.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ key.product_name }}</dt>
                            <dt>{{ key.product_brief }}</dt>
                            <dt>￥{{ key.product_price }}</dt>
                        </div>
                    </dl>
                </li>
                <li>
                    <dl v-for="key in data11.items" @click="xiangqing(key)">
                        <dd>
                            <img :src="key.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ key.product_name }}</dt>
                            <dt>{{ key.product_brief }}</dt>
                            <dt>￥{{ key.product_price }}</dt>
                        </div>
                    </dl>
                </li>
            </ul>
        </div>

        <div class="xiaomi">
            <img :src="data13.img_url" alt="" @click="xiangqing(data13)">
        </div>

        <div class="mingxing">
            <img :src="data15.img_url" alt="" @click="xiangqing(data15)">
            <ul>
                <li>
                    <dl v-for="key in data17.items" @click="xiangqing(key)">
                        <dd>
                            <img :src="key.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ key.product_name }}</dt>
                            <dt>{{ key.product_brief }}</dt>
                            <dt>￥{{ key.product_price }}</dt>
                        </div>
                    </dl>
                </li>
                <li>
                    <dl v-for="key in data18.items" @click="xiangqing(key)">
                        <dd>
                            <img :src="key.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ key.product_name }}</dt>
                            <dt>{{ key.product_brief }}</dt>
                            <dt>￥{{ key.product_price }}</dt>
                        </div>
                    </dl>
                </li>
                <li>
                    <dl v-for="key in data19.items" @click="xiangqing(key)">
                        <dd>
                            <img :src="key.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ key.product_name }}</dt>
                            <dt>{{ key.product_brief }}</dt>
                            <dt>￥{{ key.product_price }}</dt>
                        </div>
                    </dl>
                </li>
            </ul>
        </div>

        <div class="more" @click="tupian()">
            更多新品 >
        </div>

        <div class="mingxing">
            <img :src="data23.img_url" alt="" @click="xiangqing(data23)">
        </div>

        <div class="mitu">
            <ul>
                <li @click="xiangqing(data25)">
                    <img :src="data25.img_url" alt="">
                    <div>
                        <p>{{ data25.product_name }}</p>
                        <p>{{ data25.product_brief }}</p>
                        <p>￥{{ data25.product_price }}</p>
                    </div>
                </li>
                <li @click="xiangqing(data26)">
                    <div>
                        <p>{{ data26.product_name }}</p>
                        <p>{{ data26.product_brief }}</p>
                        <p>￥{{ data26.product_price }}</p>
                    </div>
                    <img :src="data26.img_url" alt="">
                </li>
                <li @click="xiangqing(data27)">
                    <img :src="data27.img_url" alt="">
                    <div>
                        <p>{{ data27.product_name }}</p>
                        <p>{{ data27.product_brief }}</p>
                        <p>￥{{ data27.product_price }}</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="more more1" @click="more()">{{ data28.action_title }} ></div>

        <div class="study">
            <ul>
                <li v-for="key in data30.items" @click="xiangqing(key)">
                    <img :src="key.img_url" alt="">
                </li>
                <li v-for="key in data32.items" @click="xiangqing(key)">
                    <img :src="key.img_url" alt="">
                </li>
                <li v-for="key in data34.items" @click="xiangqing(key)">
                    <img :src="key.img_url" alt="">
                </li>
            </ul>
        </div>

        <div class="cai">
            <img :src="data35.img_url" alt="" @click="xiangqing(data35)">
        </div>

        <div class="mingxing">
            <ul>
                <li>
                    <dl @click="xiangqing(datab0_1.items[0])">
                        <dd>
                            <img :src="datab0_1.items[0].img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ datab0_1.items[0].product_name }}</dt>
                            <dt>{{ datab0_1.items[0].product_brief }}</dt>
                            <dt>￥{{ datab0_1.items[0].product_price }}</dt>
                        </div>
                    </dl>
                    <dl @click="xiangqing(datab0_2)">
                        <dd>
                            <img :src="datab0_2.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ datab0_2.product_name }}</dt>
                            <dt>{{ datab0_2.product_brief }}</dt>
                            <dt>￥{{ datab0_2.product_price }}</dt>
                        </div>
                    </dl>
                </li>
                <li>
                    <dl @click="xiangqing(datab1_1)">
                        <dd>
                            <img :src="datab1_1.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ datab1_1.product_name }}</dt>
                            <dt>{{ datab1_1.product_brief }}</dt>
                            <dt>￥{{ datab1_1.product_price }}</dt>
                        </div>
                    </dl>
                    <dl @click="xiangqing(datab1_2)">
                        <dd>
                            <img :src="datab1_2.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ datab1_2.product_name }}</dt>
                            <dt>{{ datab1_2.product_brief }}</dt>
                            <dt>￥{{ datab1_2.product_price }}</dt>
                        </div>
                    </dl>
                </li>
                <li>
                    <dl @click="xiangqing(datab2_1)">
                        <dd>
                            <img :src="datab2_1.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ datab2_1.product_name }}</dt>
                            <dt>{{ datab2_1.product_brief }}</dt>
                            <dt>￥{{ datab2_1.product_price }}</dt>
                        </div>
                    </dl>
                    <dl @click="xiangqing(datab2_2)">
                        <dd>
                            <img :src="datab2_2.img_url" alt="">
                        </dd>
                        <div>
                            <dt>{{ datab2_2.product_name }}</dt>
                            <dt>{{ datab2_2.product_brief }}</dt>
                            <dt>￥{{ datab2_2.product_price }}</dt>
                        </div>
                    </dl>
                </li>
            </ul>
        </div>

        <div class="guanggao" ref="abc">
            <img src="../../static/img/baf392bb0c5c9d3c25f60f5fe04f0705.png" alt="">
            <span @click="closegg()"></span>
        </div>

        <div class="dibu">

        </div>

    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {

        name: "home",
        data () {
            return{
                imglist: [],
                data: [], data3_1: [], data3_2: [], data3_3: [], data5: [], data7: [], data9: [], data10: [], data11: [], data13: [], data15: [], data17: [], data18: [], data19: [], data23: [], data25: [], data26: [], data27: [], data28: [], data30: [], data32: [], data34: [], data35: [],
                datab0_1: {items: ['']}, datab0_2: '', datab1_1: [], datab1_2: [], datab2_1: [], datab2_2: [],
                scroll: '',
                swiperOption: {
                    autoplay: 1000,
                    direction : 'horizontal',
                    pagination : '.swiper-pagination',
                }

            }
        },
        created () {
            this.axios.get('../../static/xiaomi data/index3.json').then(res => {
                this.imglist = res.data.data.header.body.items;
                // console.log(this.imglist);
                this.data = res.data.data.sections[0].body;
                this.data3_1 = res.data.data.sections[3].body.items[0];
                this.data3_2 = res.data.data.sections[3].body.items[1];
                this.data3_3 = res.data.data.sections[3].body.items[2];
                this.data5 = res.data.data.sections[5].body.items[0];
                this.data7 = res.data.data.sections[7].body.items[0];
                this.data9 = res.data.data.sections[9].body;
                this.data10 = res.data.data.sections[10].body;
                this.data11 = res.data.data.sections[11].body;
                this.data13 = res.data.data.sections[13].body.items[0];
                this.data15 = res.data.data.sections[15].body.items[0];
                this.data17 = res.data.data.sections[17].body;
                this.data18 = res.data.data.sections[18].body;
                this.data19 = res.data.data.sections[19].body;
                this.data23 = res.data.data.sections[23].body.items[0];
                this.data25 = res.data.data.sections[25].body.items[0];
                this.data26 = res.data.data.sections[26].body.items[0];
                this.data27 = res.data.data.sections[27].body.items[0];
                this.data28 = res.data.data.sections[28].body.items[0];
                this.data30 = res.data.data.sections[30].body;
                this.data32 = res.data.data.sections[32].body;
                this.data34 = res.data.data.sections[34].body;
                this.data35 = res.data.data.sections[35].body.items[0];
            }),
            this.axios.get('../../static/xiaomi data/index4.json').then(res => {
                // this.datab0_1 = res.data.data.sections[0].body.items[0];
                this.datab0_1 = res.data.data.sections[0].body;
                this.datab0_2 = res.data.data.sections[0].body.items[1];
                this.datab1_1 = res.data.data.sections[1].body.items[0];
                this.datab1_2 = res.data.data.sections[1].body.items[1];
                this.datab2_1 = res.data.data.sections[2].body.items[0];
                this.datab2_2 = res.data.data.sections[2].body.items[1];
            })
        },
        methods: {
            sou() {
               this.$router.push({path: '/sou'})
            },
            menu(){
                this.scroll = document.body.scrollTop;
            },
            xiangqing (item) {
                console.log(this)
                this.$store.commit("ADDOBJ",item)
                this.$router.push({
                    path:'/detial'
                })
            },
            closegg(){
                this.$refs.abc.style.display = 'none';
            },
            tupian() {
              this.$router.push({
                path: '/list'
              })
            }
        },
        mounted(){
            window.addEventListener('scroll', this.menu)
        },

        components: {
            swiper, swiperSlide
        },
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
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
            z-index:2;

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

            position: relative;

            img{
                height: 2.94rem;
                width: 100%;
            }
            .dian{
                position: absolute;
                right: 0.1rem;
                bottom: 0.1rem;
            }
        }

        .zaobao{
            height: 0.43rem;
            margin-top: 0.015rem;
            display: flex;
            margin-bottom: 0.09rem;
            background: #fff;
            img{
                height: 0.46rem;
                width: 0.86rem;
            }
            ul{
                height: 0.43rem;
                width: 3.28rem;
                overflow: hidden;
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
            margin-top: 0.09rem;
        }
        .mingxing>img{
            height: 2.53rem;
            width: 100%;
            display: block;
            margin-bottom: 0.01rem;
        }
        .mingxing ul>li{
            display: flex;
            justify-content: space-between;
            dl{
                dd{
                    img{
                        display: block;
                        height: 2.07rem;
                        width: 2.07rem;
                    }
                }
                div{
                    box-sizing: border-box;
                    padding: 0.1rem;
                    height: 0.91rem;
                    background: #fff;
                    dt{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    dt:first-child{
                        font-size: 0.15rem;
                        color: rgba(0,0,0,.87);
                        height: 0.21rem;
                        line-height: 0.21rem;
                    }
                    dt:nth-child(2){
                        font-size: 0.13rem;
                        margin: 0.05rem 0;
                        color: rgba(0,0,0,.54);
                        height: 0.17rem;
                        line-height: 0.17rem;
                    }
                    dt:last-child{
                        font-size: 0.18rem;
                        color: #ff6000;
                        height: 0.22rem;
                        line-height: 0.22rem;
                    }
                }
            }
        }

        .xiaomi{
            margin: 0.09rem 0;
        }
        .xiaomi,.xiaomi img{
            height: 1.61rem;
            width: 100%;
        }

        .more{
            height: 0.57rem;
            background: #fff;
            text-align: center;
            line-height: 0.57rem;
            color: rgba(0,0,0,.6);
            font-size: 0.16rem;
            margin: 0.01rem 0 0.09rem;
        }
        .more1{
            margin: 0;
        }

        .mitu{
            width: 100%;
            background: #fff;
            ul li{
                height: 2.07rem;
                display: flex;
                img{
                    height: 2.07rem;
                    width: 2.07rem;
                }
                div{
                    height: 2.07rem;
                    width: 2.07rem;
                    padding: 0.3rem 0.15rem;
                    p:first-child{
                        font-size: 0.17rem;
                        color: rgba(0,0,0,.87);
                        height: 0.21rem;
                        line-height: 0.21rem;
                    }
                    p:nth-child(2){
                        font-size: 0.13rem;
                        margin: 0.05rem 0 0.08rem;
                        color: rgba(0,0,0,.54);
                        line-height: 0.20rem;
                    }
                    p:last-child{
                        font-size: 0.18rem;
                        color: #ff6000;
                        height: 0.22rem;
                        line-height: 0.22rem;
                    }
                }
            }
        }

        .study{
            width: 100%;
            overflow: hidden;
            ul>li{
                img{
                    display: block;
                    height: 2.76rem;
                    width: 2.058rem;
                }
                img:first-child{
                    float: left;
                }
                img:last-child{
                    float: right;
                }
            }
        }

        .cai,.cai img{
            height: 0.69rem;
            width: 100%;
            display: block;
        }

        .zhichang{
            margin-top: 0.09rem;
        }
        .zhichang,.zhichang img{
            display: block;
            height: 0.46rem;
            width: 100%;
        }

        .guanggao{
            height: 1.088rem;
            width: 100%;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0.52rem;
            z-index: 2;
            img{
                height: 1.088rem;
                width: 100%;
            }
            span{
                display: block;
                height: 1.088rem;
                width: 0.27rem;
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: 3;
            }
        }

        .dibu{
            height: 0.52rem;
        }

    }
</style>
