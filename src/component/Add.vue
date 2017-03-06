<template>
    <div id="add">
        <w-head></w-head>
        <div class="container">
            <transition name="fade">
                {{msg}}
            </transition>
        </div>

    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>


    export default {
        name: 'add',
        data () {
            return {
                msg: 'Add'
            }
        },

    }
</script>