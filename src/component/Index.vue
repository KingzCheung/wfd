<template>
    <div id="index">
        <w-head message="今天吃什么"></w-head>
        <div class="container">
            <mt-swipe :auto="0" class="banner">
                <mt-swipe-item>
                    <a href="#">
                        <img src="http://s2.cdn.xiachufang.com/a4dc885c000611e7bc9d0242ac110002_963w_770h.jpg?imageView2/2/w/620/interlace/1/q/90">
                        <p>烫种牛奶吐司</p>
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <img src="http://s1.cdn.xiachufang.com/8f3a2ea6ffc411e6947d0242ac110002_1500w_1000h.jpg@2o_50sh_1pr_1l_620w_90q_1wh">
                        <p>烫种牛奶吐司</p>
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <img src="http://s2.cdn.xiachufang.com/4348395c8a4911e6a9a10242ac110002_1280w_1280h.jpg?imageView2/2/w/620/interlace/1/q/90">
                        <p>烫种牛奶吐司</p>
                    </a>
                </mt-swipe-item>
            </mt-swipe>
            <div class="banner-desc">
                <p class="banner-hd">今天菜谱:</p>
                <ul>
                    <li>
                        <router-link :to="{ name: 'cookbook', params: { id: 123 }}">包饺子</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'cookbook', params: { id: 124 }}">烫种牛奶吐司</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'cookbook', params: { id: 125 }}">可乐鸡翅</router-link>
                    </li>
                </ul>
            </div>

            <week></week>
            <feast></feast>
        </div>

    </div>
</template>

<script>

    import week from './Week.vue';
    import feast from './Feast.vue';


    export default {
        name: 'index',
        data () {
            return {}
        },
        components:{
            week,feast
        }
    }
</script>

<style lang="scss">
    @import "../scss/base.scss";

</style>