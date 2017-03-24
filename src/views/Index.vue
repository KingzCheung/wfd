<template>
    <div id="index">
        <w-head message="今天吃什么"></w-head>
        <div class="container">
            <mt-swipe :auto="4000" class="banner">
                <mt-swipe-item v-for="(item,i,index) in today" :key="index">
                    <a href="#">
                        <img :src="item.cookbook.img">
                        <p>{{item.cookbook.name}}</p>
                    </a>
                </mt-swipe-item>
            </mt-swipe>
            <div class="banner-desc">
                <p class="banner-hd">今天菜谱:</p>
                <ul>
                    <li v-for="(item,i,index) in today" :key="index">
                        <router-link :to="{ name: 'cookbook', params: { id: 123 }}">{{item.cookbook.name}}</router-link>
                    </li>
                </ul>
            </div>

            <week></week>
            <feast></feast>
        </div>
        <w-tab></w-tab>
    </div>
</template>

<script>

    import week from '../component/Week.vue';
    import feast from '../component/Feast.vue';


    export default {
        name: 'index',
        data () {
            return {
                today: null,
            }
        },
        components: {
            week, feast
        },
        created: function () {
            let self = this;
            self.$http.get(self.$config.api('plan')).then(function (resp) {
                self.today = resp.data;
            });
            self.$http.get(self.$config.api('plan/week')).then(function (resp) {
                self.weeks = resp.data;
            });

        }
    }
</script>

<style lang="scss">
    @import "../scss/base.scss";

</style>