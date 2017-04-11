<template>
    <div id="feast">

        <div class="feast">
            <div class="feast-title">大餐、聚餐</div>
            <div class="feast-content">
                <router-link :to="{ name: 'cookbook', params: { id: item.id }}" class="f-item"
                             v-for="(item,i,index) in dinner" :key="index">
                    <div class="f-cover">
                        <img
                                :src="item.img">
                    </div>

                    <div class="f-title">
                        {{item.name}}
                    </div>
                </router-link>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>

    export default {
        name: 'feast',
        data () {
            return {
                dinner: null
            }
        },
        created: function () {
            let self = this;
            self.$http.get(self.$config.api('dinner')).then(function (resp) {
                self.dinner = resp.data;
            });
        }

    }
</script>