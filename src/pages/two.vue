<template>
    <div class="two">
        <h1>two</h1>
        <hr>

        <ul>
            <li v-for="item in data">
                <img :src="item.img" :style="{width:'150px'}" alt="">
                <p>{{ item.name }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "two",
        data () {
            return {
                data: []
            }
        },
        created(){//组件创建完成，即可发起网络请求
            /*this.$http.get("http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php").then(res => {
                // 将获取的数据放在data中
                this.data = res.body.data
                
            },err => {
                    console.log(err)
                })*/
             this.axios.get("http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php").then(res => {
                // 将获取的数据放在data中
                this.data = res.data.data
                
            },err => {
                    console.log(err)
                })

        }

    }

</script>

<style>
    .two h1 {
        color:#ff0;
    }
</style>