<template>
    <div class="cooklist">
        <h3 class="cook-title">{{$route.query.weekname}}菜谱</h3>
        <ul class="list">
            <li v-for="(plan,index) in plans" :key="index">
                <router-link :to="{name:'cookbook',params:{id:plan.cookbook.id}}">{{plan.cookbook.name}}</router-link>
            </li>
        </ul>
        <w-tab></w-tab>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>

    export default {
        name: 'cooklist',
        data () {
            return {
                plans: null
            }
        },
        created: function () {
            let self = this;
            let time = self.$route.params.time;
            self.$http.get(self.$config.api('plan/' + time)).then(function (resp) {
                self.plans = resp.data;
            });
        }

    }
</script>