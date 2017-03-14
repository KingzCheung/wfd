<template>
    <div id="head">
        <header class="header is-fixed">
            <div v-if="left" class="header-left">
                <a onclick="window.history.go(-1)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-back"></use>
                    </svg>
                </a>
            </div>
            <h3 class="header-title">{{message}}</h3>
            <div v-if="right" class="header-right">
                <router-link to="/setting">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-set"></use>
                    </svg>
                </router-link>
            </div>
        </header>
    </div>
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
            left: Boolean,
            right: Boolean
        },

    }
</script>

