<template>
    <div id="user">
        <w-head message="我的" right class-name="big-header"></w-head>
        <div class="container" v-if="user.id">
            <profile></profile>
            <cells>
                <cell>
                    <p slot="header">第一个开头</p>
                    <mt-switch v-model="value" slot="footer"></mt-switch>
                </cell>

                <cell link="https://www.kingzcheung.com">
                    <p slot="header">第二个开头</p>
                </cell>
            </cells>
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

    import profile from '../component/Profile.vue';
    import cells from '../component/common/Cells.vue';
    import cell from '../component/common/Cell.vue';

    export default {
        name: 'user',
        data () {
            return {
                user: {
                    id: 1
                },
                value: false
            }
        },
        components: {
            profile, cells, cell
        }

    }
</script>