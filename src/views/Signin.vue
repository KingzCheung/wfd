<template>
    <div id="signin">

        <div class="login">
            <router-link to="/" class="cencel">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </router-link>

            <logo></logo>

            <div class="form">
                <mt-field label="用户名" :attr="{name:'username'}" placeholder="请输入用户名"></mt-field>
                <mt-field label="密码" :attr="{name:'password'}" placeholder="请输入密码" type="password"></mt-field>

                <div class="submit">
                    <button type="button" class="btn btn-info" @click="submit">登录</button>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import "../scss/base.scss";
</style>
<script>

    import logo from '../component/common/Logo.vue';
    export default {
        name: 'signin',
        data () {
            return {}
        },
        components: {
            logo
        },
        methods: {
            submit: function () {
                let username = document.querySelector('input[name="username"]').value;
                let password = document.querySelector('input[name="password"]').value;

//                this.$http.post(this.$config.api('user'), {
//                    username: username,
//                    password: password
//                }).then(function (resp) {
//                    console.log(resp.data)
//                });


                const data = {
                    name: 'kingzcheung',
                    redirect: '/'
                };

                this.$http.post('http://wfdend.dev/oauth/token', data).then(function (resp) {
                    console.log(resp)
                })
            }
        }

    }
</script>