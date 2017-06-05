<template>
    <div class="home">
        <div class="header">
            <img src="../assets/img/logo.png" alt="">
            <div class="sou">
                <input type="text" placeholder="搜索商品名称">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",

    }

</script>

<style scope lang="less">
    .home{
        width: 100%;
        .header {
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
            height: 0.34rem;
            width: 2.99rem;
            margin-top: 0.07rem;
            background: url(../assets/img/search_bfba941.png) no-repeat 0 0;
            background-size: 100%;
        }

    }
</style>
