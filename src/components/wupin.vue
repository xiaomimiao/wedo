<template>
	<div class="car_xiang">
	   <div class="hongmi">
            <div class='xuanzhong'></div>
            <img :src="getObj.img_url || getObj.image_url" alt="">
            <div class="jshao">
                <p>{{ getObj.product_name ||  getObj.name}}</p>
                <p>￥<span>{{ getObj.product_price || getObj.price || 3499 }}</span></p>
            </div>
        </div>
        <div class="gou">
            <span @click='redueOne()'><img src="../../static/img/jian.png" alt="" ></span>
            <span>{{this.$store.state.count}}</span>
            <span @click='addOne()'><img src="../../static/img/add.png" alt=""></span>
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
            addOne(){
            	 this.$store.commit({
            	 	type:'ADD_PRICE',
            	 })
            	
            	
            },
            redueOne(){
            	 this.$store.commit({
            	 	type:'DOWN_PRICE',
            	 })
            	
            }

        },
        computed: {
            getObj() {
//              console.log(this.$store.getters.get)
                return  this.$store.getters.get
//              console.log(this.$store.state.count)
                
            }
        }
  })
	
</script>
<style scoped lang='less'>
	.car_xiang{
        position: absolute;
        .hongmi{
            height: 1.33rem;
            margin: 0.1rem 0;
            display: flex;
            .xuanzhong{
                width: 0.3rem;
                height: 0.3rem;
                border: 1px solid #ccc;
                border-radius: 50%;
                margin: 0.4rem 0.13rem;
                background: url(../../static/img/check_press.png) no-repeat 0 0;
                background-size: 100%;
            }
            img{
                width: 1.03rem;
                height: 1.03rem;
            }
            .jshao{
                width: 2.25rem;
                margin-left: 0.2rem;
                p:first-child{
                    font-size: 0.17rem;
                    color: #666;
                    line-height: 0.23rem;
                }
                p:nth-child(2){
                    font-size: 0.15rem;
                    color: #999;
                    line-height: 0.24rem;
                }
            }
        }
        .gou{
            height: 0.39rem;
            width: 1.17rem;
            position: absolute;
            right: 1.2rem;
            bottom: 0.3rem;
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
	
</style>