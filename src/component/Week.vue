<template>
    <div id="week">
        <div class="week">
            <div class="week-item">
                <a href="" v-for="(week,index) in weeks" :key="index" v-if="index < 4">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="week.icon"></use>
                    </svg>
                    <p>{{week.week_name}}</p>
                </a>
            </div>
            <div class="week-item">
                <a href="" v-for="(week,index) in weeks" :key="index" v-if="index >= 4">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="week.icon"></use>
                    </svg>
                    <p>{{week.week_name}}</p>
                </a>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-gengduo"></use>
                    </svg>
                    <p>更多</p>
                </a>

            </div>

        </div>
    </div>
</template>

<script>

    export default {
        name: 'week',
        data () {
            return {
                weeks: null
            }
        },
        created: function () {
            let self = this;
            self.$http.get(self.$config.api('plan/week')).then(function (resp) {
                self.weeks = resp.data;
                console.log(self.weeks)
            });

        }

    }
</script>

<style lang="scss">
    @import "../scss/base.scss";
</style>