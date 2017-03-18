<template>
    <div class="w-cells">
        <slot>
            <cell-list></cell-list>
        </slot>
    </div>
</template>

<style lang="scss">
    @import "../../scss/base.scss";
</style>

<script>

    import cell from '../common/Cell.vue';

    export default {
        name: 'cells',
        data () {
            return {}
        },
        components: {
            'cell-list': cell,
        }

    }
</script>