<template>
    <div id="category">
        <w-head message="分类"></w-head>
        <div class="container">

            <cells>
                <cell-list :to="item.to" :text="item.text" v-for="item in categorys" :key="item.text">
                    <div slot="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-set"></use>
                        </svg>
                    </div>
                </cell-list>
            </cells>

        </div>
        <w-tab></w-tab>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>
    import cells from '../component/common/Cells.vue';
    import cell from '../component/common/Cell.vue';
    export default {
        name: 'subCategory',
        data () {
            return {
                categorys: null
            }
        },
        components: {
            'cells': cells,
            'cell-list': cell
        },
        created: function () {
            let self = this;
            self.$http.get(self.$config.api('category/' + id))
        }

    }
</script>