<template>
    <div class="logo">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fish"></use>
        </svg>
    </div>
</template>

<style lang="scss">
    .logo {
        text-align: center;
        font-size: 50px;
    }
</style>

<script>

    export default {
        name: 'logo',
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        },

    }
</script>