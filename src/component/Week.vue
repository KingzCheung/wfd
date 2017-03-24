<template>
    <div id="week">
        <div class="week">
            <div class="week-item">
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-cooked"></use>
                    </svg>
                    <p>星期一</p>
                </a>

                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fried"></use>
                    </svg>
                    <p>星期二</p>
                </a>

                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-pot"></use>
                    </svg>
                    <p>星期三</p>
                </a>

                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-steaming"></use>
                    </svg>
                    <p>星期四</p>
                </a>
            </div>

            <div class="week-item">
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-omlet"></use>
                    </svg>
                    <p>星期五</p>
                </a>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-meat"></use>
                    </svg>
                    <p>星期六</p>
                </a>
                <a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-spaghetti"></use>
                    </svg>
                    <p>星期日</p>
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
            self.$http.get(self.$config.api('plan')).then(function (resp) {
                self.today = resp.data;
            });
            self.$http.get(self.$config.api('plan/week')).then(function (resp) {
                self.weeks = resp.data;
            });

        }

    }
</script>

<style lang="scss">
    @import "../scss/base.scss";
</style>