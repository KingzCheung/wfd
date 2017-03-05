<template>
    <div id="app">

        <router-view></router-view>

        <w-tab></w-tab>
    </div>
</template>

<script>
    import w_tab from './component/Tabbar.vue';

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'w-tab': w_tab
        },

    }
</script>

<style lang="scss" scoped>
    @import "./scss/base.scss";
</style>
