<template>
    <div class="mine">
        <h1>我的</h1>
        <hr>
        <router-link to="/mine/one">one</router-link>
        <router-link to="/mine/two">two</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "mine",

    }

</script>

<style>
    .mine h1 {
        color:#00f;
    }
</style>