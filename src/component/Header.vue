<template>
    <header class="header is-fixed" :class="className">
        <a href="javascript:;" onclick="history.go(-1)" v-if="left" class="header-left">
            <i class="iconfont icon-back"></i>
        </a>
        <h3 class="header-title">{{message}}</h3>
        <div v-if="right" class="header-right">
            <router-link to="/setting">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-set"></use>
                </svg>
            </router-link>
        </div>
    </header>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>

    import Vue from 'vue';

    export default {
        name: 'w-head',
        data () {
            return {}
        },
        props: {
            message: String,
            className: String,
            right: Boolean,
            left: Boolean,

        },

    }
</script>

