<template>
    <router-link v-bind:to="to" class="grid">
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