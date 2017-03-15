<template>
    <div id="category">
        <w-head message="分类"></w-head>
        <div class="container">
            <cells>
                <cell-list link="https://www.kingzcheung.com" v-for="i in 5">
                    <p slot="header">第{{ i }}个开头</p>
                </cell-list>
            </cells>

        </div>

    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>
    import cells from './common/Cells.vue';
    import cell from './common/Cell.vue';
    export default {
        name: 'category',
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        },
        components: {
            'cells': cells,
            'cell-list': cell
        }

    }
</script>