<template>
    <div id="category">
        <w-head message="分类"></w-head>
        <div class="container">
            <dl class="listgroup" v-for="(item,i,index) in categorys['root']" :key="index">
                <dt>{{item.cname}}</dt>

                <dd v-for="(subitem,subi,subindex) in categorys['sub']" :key="subindex" v-if="subitem.pid == item.id">
                    <a href="#">
                        <span class="title">{{subitem.cname}}</span>
                        <i class="iconfont icon-more"></i>
                    </a>
                </dd>

            </dl>
        </div>
        <w-tab></w-tab>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>
    export default {
        name: 'category',
        data () {
            return {
                categorys: {
                    root: null, sub: null
                }
            }
        },
        created: function () {
            let self = this;
            self.$http.get(self.$config.api('category')).then(function (resp) {
                self.categorys = resp.data;
            });
        }

    }
</script>