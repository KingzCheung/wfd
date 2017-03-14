<template>
    <a :href="link" class="cell-list" v-if="link">
        <div class="cell-header">
            <slot name="header"></slot>
        </div>
        <div class="cell-body">
            <slot name="body"></slot>
        </div>
        <div class="cell-footer">
            <slot name="footer">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-more"></use>
                </svg>
            </slot>
        </div>
    </a>
    <div class="cell-list" v-else>
        <div class="cell-header">
            <slot name="header"></slot>
        </div>
        <div class="cell-body">
            <slot name="body"></slot>
        </div>
        <div class="cell-footer">
            <slot name="footer">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-more"></use>
                </svg>
            </slot>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../../scss/base.scss";
</style>

<script>


    export default {
        name: 'cell-list',
        data () {
            return {}
        },
        props: {
            link: String
        }

    }
</script>