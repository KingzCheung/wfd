<template>
    <div class="notfound">
        <h1>404</h1>
        <p>{{ msg }}</p>
        <p class="linkto">
            <a href="https://www.kingzcheung.com">访问博客</a>
        </p>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>

    export default {
        name: 'notfound',
        data () {
            return {
                msg: 'Page Not Found'
            }
        },

    }
</script>