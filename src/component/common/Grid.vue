<template>
    <router-link v-bind:to="to" class="grid">
        <div class="grid-icon">
            <slot name="icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-set"></use>
                </svg>
            </slot>
        </div>
        <p class="grid-label">{{text}}</p>
    </router-link>
</template>

<style lang="scss">
    @import "../../scss/base.scss";
</style>

<script>


    export default {
        name: 'grid',
        data () {
            return {}
        },
        props: {
            text: String,
            to: String
        }

    }
</script>