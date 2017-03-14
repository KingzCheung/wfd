<template>
    <div id="setting">
        <w-head message="设置"></w-head>
        <div class="container">
            <w-cell>
                <p slot="header">第一个开头</p>
                <mt-switch v-model="value" slot="footer"></mt-switch>
            </w-cell>

        </div>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>
    import Cells from './common/Cell.vue';
    export default {
        name: 'setting',
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        },
        components: {
            'w-cell': Cells
        }
    }
</script>