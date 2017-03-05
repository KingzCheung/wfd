<template>
    <div id="user">
        <w-head message="个人资料" left right></w-head>
        <div class="container">
            <profile></profile>
            <tab></tab>
        </div>

    </div>
</template>

<script>

    import profile from './Profile.vue';
    import tab from './Tab.vue';

    export default {
        name: 'user',
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        },
        components:{
            profile,tab
        }

    }
</script>