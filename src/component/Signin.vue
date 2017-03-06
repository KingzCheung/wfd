<template>
    <div id="foo">
        <router-link to="/">Go to Foo</router-link>
        {{msg}}

    </div>
</template>
<style lang="scss">
    @import "../scss/base.scss";
</style>
<script>

    export default {
        name: 'foo',
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        },

    }
</script>