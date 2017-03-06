<template>
    <div id="signin">

        <div class="login">
            <router-link to="/user" class="cencel">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </router-link>

            <div class="form">
                <mt-field label="用户名" placeholder="请输入用户名" state="success"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" type="password" state="error"></mt-field>

                <div class="submit">
                    <button type="button" class="btn btn-info">登录</button>
                </div>

            </div>
        </div>

    </div>
</template>
<style lang="scss">
    @import "../scss/base.scss";
</style>
<script>

    export default {
        name: 'signin',
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        },

    }
</script>