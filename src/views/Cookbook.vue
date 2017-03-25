<template>
    <div id="cookbook">
        <w-head message="详情" left></w-head>
        <div class="container no-tab">
            <div class="cookbook-cover">
                <img :src="cookbook.img">
            </div>
            <div class="cookbook-detail">
                <div class="cb-title"><h2>{{ cookbook.name }}</h2></div>
                <div class="cb-description">
                    <p>{{ cookbook.description }}</p>
                </div>
                <section class="ingredients">
                    <h3>用料</h3>
                    <cells>

                        <cell-list v-for="(ing, index) in cookbook.ingredient" :key="index">
                            <p slot="header">{{ing.name}}</p>
                            <p slot="body">{{ ing.weight }}</p>
                            <p slot="footer" v-if="ing.required == 1">必选</p>
                            <p slot="footer" v-else>可选</p>
                        </cell-list>

                    </cells>
                </section>
                <section class="cb-content">
                    <h3>做法</h3>
                    <div class="content" v-html="cookbook.content"></div>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>

    import cells from '../component/common/Cells.vue';
    import cell from '../component/common/Cell.vue';

    export default {
        name: 'cookbook',
        data () {
            return {
                cookbook: {},
            }
        },
        components: {
            'cells': cells,
            'cell-list': cell
        },
        created: function () {
            let self = this;
            self.$http.get(self.$config.api('cookbook/' + self.$route.params.id)).then(function (resp) {
                self.$data.cookbook = resp.data;
            })

        }

    }
</script>