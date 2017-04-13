<template>
    <div id="setting">
        <w-head message="设置"></w-head>
        <div class="container">
            <cells>
                <cell-list>
                    <p slot="header">第一个开头</p>
                    <mt-switch v-model="value" slot="footer"></mt-switch>
                </cell-list>

                <cell-list link="https://www.kingzcheung.com">
                    <p slot="header">作者</p>
                </cell-list>
            </cells>

        </div>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>
    import cells from '../component/common/Cells.vue';
    import cell from '../component/common/Cell.vue';
    export default {
        name: 'setting',
        data () {
            return {
                value: false
            }
        },
        components: {
            'cells': cells,
            'cell-list': cell
        }
    }
</script>