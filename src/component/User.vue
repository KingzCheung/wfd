<template>
    <div id="user">
        <w-head message="个人资料" left right></w-head>
        <div class="container" v-if="user.id">
            <profile></profile>
            <tab></tab>
        </div>

        <div class="container login-msg" v-if="!user.id">
            <router-link to="/signin" class="btn btn-info btn-inline">你还未登录，请先登录</router-link>
        </div>

    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>

    import profile from './Profile.vue';
    import tab from './Tab.vue';

    export default {
        name: 'user',
        data () {
            return {
                user: {
                    id: 1
                }
            }
        },
        components:{
            profile,tab
        }

    }
</script>