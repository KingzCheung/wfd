<template>
    <div id="cookbook">
        <w-head message="详情" left></w-head>
        <div class="container">
            <div class="cookbook-cover">
                <img :src="cookbook.data.img"
                     alt="">
            </div>
            <div class="cookbook-detail">
                <div class="cb-title"><h2>{{ cookbook.data.name }}</h2></div>
                <div class="cb-description">
                    <p>{{ cookbook.data.description }}</p>
                </div>
                <section class="ingredients">
                    <h3>用料</h3>
                    <cells>
                        <cell-list>
                            <p slot="header">猪肉</p>
                            <p slot="body">1两</p>
                            <p slot="footer">必选</p>
                        </cell-list>
                        <cell-list>
                            <p slot="header">料酒</p>
                            <p slot="body">1汤勺</p>
                            <p slot="footer">必选</p>
                        </cell-list>
                        <cell-list>
                            <p slot="header">盐</p>
                            <p slot="body">1汤勺</p>
                            <p slot="footer">必选</p>
                        </cell-list>
                        <cell-list>
                            <p slot="header">酱油</p>
                            <p slot="body">1汤勺</p>
                            <p slot="footer">必选</p>
                        </cell-list>
                    </cells>
                </section>
                <section class="cb-content">
                    <h3>做法</h3>
                    <div class="content" v-html="cookbook.data.content"></div>
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
                self.$data.cookbook = resp
                console.log(self.cookbook)
            })

        }

    }
</script>