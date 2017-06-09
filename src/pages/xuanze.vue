<template>
    <div class="xuan">
        <div class="ze">

            <div class="hongmi">
                 <img :src="getObj.img_url || getObj.image_url" alt="">
                <div class="jshao">
                    <p>￥<span>{{ getObj.product_price || getObj.market_price || 3499 }}</span></p>
                    <p>{{ getObj.product_name ||  getObj.name}}</p>
                </div>
            </div>

            <div class="xz">
                <div class="yanse">
                    <p>颜色</p>
                    <ul>
                        <li>香槟金</li>
                        <li>磨砂黑</li>
                        <li>樱花粉</li>
                    </ul>
                </div>
                <div class="yanse">
                    <p>容量</p>
                    <ul>
                        <li>64GB</li>
                    </ul>
                </div>
                <div class="shu yanse">
                    <p>购买数量</p>
                    <div class="gou">
                        <span><img src="../../static/img/jian.png" alt=""></span>
                        <span>1</span>
                        <span><img src="../../static/img/add.png" alt=""></span>
                    </div>
                </div>
                <div class="baoxian yanse">
                    <p>意外保险</p>
                    <ul>
                        <li>红米4X 意外保险 69元</li>
                    </ul>
                </div>
            </div>

            <div class="queren" @click="gou()">
                确定
            </div>
            <span class="guan" @click="guan()"></span>
        </div>
    </div>
</template>

<script>
    export default({
        name : 'ss',
        data(){
          return {
            data:'',

          }
        },
        methods:{
            gou() {
                this.$router.push({
                    path: '/cart'
                })
            },
            guan() {
                 this.$router.push({
                    path: '/detial'
                })
            }

        },
        computed: {
            getObj() {
                console.log(this.$store.getters.get)
                return  this.$store.getters.get
            }
        }
  })
</script>

<style scoped lang="less">
    .xuan{
        width: 4.14rem;
        height: 7.36rem;
        background: rgba(0,0,0,.3);
        position: relative;
        left: 0;
        right: 0;
        top: 0;
        z-index: 30;
        .ze{
            box-sizing: border-box;
            height: 4.66rem;
            background: #fff;
            border-top: 1px solid #f4f4f4;
            padding: 0.5rem 0.2rem;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 40;
            .hongmi{
                height: 0.5rem;
                width: 3.77rem;
                overflow: hidden;
                border-bottom: 1px solid #f4f4f4;
                img{
                    height: 1.17rem;
                    width: 1.17rem;
                    border: 1px solid #f4f4f4;
                    position: absolute;
                    left: 0.2rem;
                    top: -0.4rem;
                }
                .jshao{
                    position: absolute;
                    left: 1.5rem;
                    top: 0.18rem;
                    p:first-child{
                        font-size: .18rem;
                        color: #f56600;
                        span{
                            font-size: 0.24rem;
                            position: relative;
                            top: 0.04rem;
                        }
                    }
                    p:last-child{
                        font-size: .16rem;
                        color: rgba(0,0,0,.87);
                        line-height: .3rem;
                    }
                }
            }

            .xz{
                height: 2.875rem;
                width: 3.77rem;
                position: relative;
                overflow-y: scroll;
                .yanse{
                    border-bottom: 1px solid #f4f4f4;
                    height: 0.95rem;
                    p{
                        height: 0.5rem;
                        line-height: 0.5rem;
                        font-size: .14rem;
                        color: rgba(0,0,0,.87);
                    }
                    ul{
                        height: 0.45rem;
                        li{
                            box-sizing: border-box;
                            border: 1px solid #f4f4f4;
                            height: 0.34rem;
                            text-align: center;
                            font-size: 0.14rem;
                            line-height: 0.34rem;
                            color: rgba(0,0,0,.87);
                            float: left;
                            margin-right: 0.15rem;
                            padding: 0 0.2rem;
                        }
                        li:first-child{
                            color: #f56600;
                            border-color: #f56600;
                        }
                    }
                }
                .shu{
                    height: 0.72rem;
                    position: relative;
                    p{
                        height: 0.72rem;
                        line-height: 0.72rem;
                    }
                    .gou{
                        height: 0.39rem;
                        width: 1.17rem;
                        position: absolute;
                        right: 0;
                        top: 0.16rem;
                        overflow: hidden;
                        span{
                            height: 0.39rem;
                            width: 0.39rem;
                            display: inline-block;
                            border: 1px solid #f4f4f4;
                            box-sizing: border-box;
                            img{
                                display: block;
                                height: 0.19rem;
                                width: 0.19rem;
                                position: absolute;
                                left: 0.1rem;
                                top: 0.1rem;
                            }
                        }
                        span:first-child{
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                        span:nth-child(2){
                            position: absolute;
                            left: 0.39rem;
                            top: 0;
                            font-size: 0.13rem;
                            color: rgba(0,0,0,.7);
                            height: 0.39rem;
                            line-height: 0.39rem;
                            text-align: center;
                            border-left: none;
                            border-right: none;
                        }
                        span:last-child{
                            position: absolute;
                            right: 0;
                            top: 0;
                        }
                    }
                }
                .baoxian{
                    border: none;
                    height: 0.9rem;
                }
            }



            .queren{
                height: 0.53rem;
                width: 100%;
                background: #f95b07;
                line-height: 0.53rem;
                text-align: center;
                color: #fff;
                font-size: 0.18rem;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
            }


            .guan{
                height: 0.23rem;
                width: 0.23rem;
                display: block;
                position:absolute;
                top: 0.15rem;
                right: 0.15rem;
                color: #c9c9c9;
                background: url(../../static/img/close_38467b8.png);
                background-size: cover;
            }
        }
    }
</style>
