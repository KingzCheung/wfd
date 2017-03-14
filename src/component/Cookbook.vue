<template>
    <div id="cookbook">
        <w-head message="详情" left></w-head>
        <div class="container">
            <div class="cookbook-cover">
                <img src="http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/620/interlace/1/q/90"
                     alt="">
            </div>
            <div class="cookbook-detail">
                <div class="cb-title"><h2>鱼香肉丝</h2></div>
                <div class="cb-description">
                    <p>辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……</p>
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
                    <h3>内容开始</h3>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>

    import cells from './common/Cells.vue';
    import cell from './common/Cell.vue';

    export default {
        name: 'cookbook',
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        },
        components: {
            'cells': cells,
            'cell-list': cell
        }

    }
</script>