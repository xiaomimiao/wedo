<template>
    <div id="lunbo1">
        <div class="swiper-container">
            <div class="swiper-wrapper">

                <div class="swiper-slide" v-for = 'img in imglist'>
                     <img  :src="img.xxx">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default{
        props:['imglist'],
        mounted(){
            var mySwiper = new Swiper ('.swiper-container', {
                        loop: true,
                        autoplay: 1000,
                        observer:true,
                        // 如果需要分页器
                        pagination: '.swiper-pagination'
                    })
        },
        activated(){
            console.log(imglist);
        },
        created(){
             console.log(this.imglist);
        }
    }
</script>

<style scoped>
    @import "../../static/swiper.css";
    #lunbo{
        width: 100%;
    }
    #lun img{
        width: 100%;
    }
</style>
鼬 21:40:43
<template>
    <div id="lunbo">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for = 'img in imglist'><img :src="img.url"></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default{
        props:['imglist'],
        mounted(){
            var mySwiper = new Swiper ('.swiper-container', {
                        loop: true,
                        autoplay: 1000,
                        observer:true,
                        // 如果需要分页器
                        pagination: '.swiper-pagination'
                    })
        },
        activated(){
            console.log(imglist);
        }
    }
</script>

<style scoped>
    @import "../../static/swiper.css";
    #lunbo{
        width: 100%;
    }
    #lun img{
        width: 100%;
    }
</style>