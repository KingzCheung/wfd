<template>
    <div id="cell">
        <div class="w-cells">
            <a href="javascript:;" class="cell-list">
                <div class="cell-header">
                    <slot name="header"></slot>
                </div>
                <div class="cell-body">
                    <slot name="body"></slot>
                </div>
                <div class="cell-footer">
                    <slot name="footer"></slot>
                </div>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../../scss/base.scss";
</style>

<script>


    export default {
        name: 'w-cell',
        data () {
            return {}
        },

    }
</script>