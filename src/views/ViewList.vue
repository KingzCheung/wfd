<template>
    <div id="viewlist">
        <div class="container">
            <w-head message="榜单"></w-head>
            <list></list>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>
    import list from '../component/List.vue';
    export default {
        name: 'viewlist',
        data () {
            return {}
        },
        components: {
            list
        }
    }
</script>