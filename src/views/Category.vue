<template>
    <div id="category">
        <w-head message="分类"></w-head>
        <div class="container">

            <grids>
                <grid-list :to="item.to" :text="item.text" v-for="item in categorys" :key="item.text">
                    <div slot="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-set"></use>
                        </svg>
                    </div>
                </grid-list>
            </grids>

        </div>
        <w-tab></w-tab>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>
    import grids from '../component/common/Grids.vue';
    import grid from '../component/common/Grid.vue';
    export default {
        name: 'category',
        data () {
            return {
                categorys: [
                    {to: '/', text: "第1个"},
                    {to: '/category', text: "第2个"},
                    {to: '/category', text: "第3个"},
                    {to: '/category', text: "第4个"},
                    {to: '/category', text: "第5个"},
                    {to: '/category', text: "第6个"},
                    {to: '/category', text: "第7个"},
                    {to: '/category', text: "第8个"},
                    {to: '/category', text: "第9个"}
                ]
            }
        },
        components: {
            'grids': grids,
            'grid-list': grid
        }

    }
</script>