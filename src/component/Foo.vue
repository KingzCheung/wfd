<template>
    <div id="foo">
        <router-link to="/">Go to Foo</router-link>
        {{msg}}

    </div>
</template>

<script>


    export default {
        name: 'foo',
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        },

    }
</script>