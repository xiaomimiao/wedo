<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in bannerData">
            <img :src="item.pic">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default{
        data() {
            return {
                swiperOption: {
                    autoplay: 1000,
                    direction : 'horizontal',
                    pagination : '.swiper-pagination',
                }
            }
        },
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>

<style scoped>
   /*  @import "../../static/swiper.css";
   #lunbo{
       width: 100%;
   }
   #lunbo img{
       width: 100%;
   } */
</style>