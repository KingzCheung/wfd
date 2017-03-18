<template>
    <div class="grids">
        <slot>
            <grid-list v-for="item in 9" :key="item">{{item}}</grid-list>
        </slot>
    </div>
</template>

<style lang="scss">
    @import "../../scss/base.scss";
</style>

<script>

    import grid from './Grid.vue';

    export default {
        name: 'grid',
        data () {
            return {}
        },
        components: {
            'grid-list': grid
        },
        props: {
            count: Number
        }

    }
</script>