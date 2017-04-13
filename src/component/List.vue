<template>
    <div id="list">
        <ul class="cell">
            <li v-for='(item,index) in titlelist' :class="{current:iscur==index}" @click="iscur=index"
                class="cell-list">
                <router-link :to="{name:'cookbook',params:{id:item.id}}">
                    <aside>
                        <img v-bind:src="item.img">
                    </aside>
                    <h3 class="list-title">{{item.name}}</h3>
                </router-link>
            </li>
        </ul>

    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>
<script>

    export default {
        name: 'list',
        data () {
            return {
                iscur: 0,
                titlelist: null
            }
        },
        created: function () {
            let self = this;
            let category = self.$route.query.category || '';
            self.$http.get(self.$config.api('list/' + category)).then(function (resp) {
                self.titlelist = resp.data;
            });
        }

    }
</script>