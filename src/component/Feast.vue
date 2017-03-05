<template>
    <div id="feast">

        <div class="feast">
            <div class="feast-title">大餐、聚餐</div>
            <div class="feast-content">
                <router-link to="/" class="f-item">
                    <div class="f-cover">
                        <img
                             src="http://s2.cdn.xiachufang.com/38ad15e88adb11e6b87c0242ac110003_1800w_1350h.jpg?imageView2/2/w/620/interlace/1/q/90">
                    </div>

                    <div class="f-title">
                        奥利奥草莓酸奶慕斯蛋糕
                    </div>
                </router-link>
                <router-link to="/" class="f-item">
                    <div class="f-cover">
                        <img src="http://s2.cdn.xiachufang.com/5c2ec43e88e811e6a9a10242ac110002_750w_728h.jpg?imageView2/1/w/280/h/216/interlace/1/q/90">
                    </div>
                    <div class="f-title">
                        宫保鸡丁
                    </div>
                </router-link>
                <router-link to="/" class="f-item">
                    <div class="f-cover">
                        <img src="http://s2.cdn.xiachufang.com/e5b42524885b11e6b87c0242ac110003_650w_650h.jpg?imageView2/1/w/280/h/216/interlace/1/q/90">
                    </div>
                    <div class="f-title">
                        水煮肉片（吃不够的下饭菜）
                    </div>
                </router-link>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>

    export default {
        name: 'feast',
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        },

    }
</script>