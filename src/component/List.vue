<template>
    <div id="list">
        <ul class="cell">
            <li v-for='(item,index) in titlelist' :class="{current:iscur==index}" @click="iscur=index" class="cell-list">
                <router-link to="/">
                    <aside>
                        <img v-bind:src="item.src">
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
                iscur:0,
                titlelist:[
                    {
                        name:'宫爆鸡丁',
                        src:'http://s2.cdn.xiachufang.com/4daad8ea877a11e6a9a10242ac110002_469w_701h.jpg?imageView2/1/w/375/h/259/interlace/1/q/90'
                    },
                    {
                        name:'鱼香肉丝',
                        src:'http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/1/w/375/h/259/interlace/1/q/90'
                    },
                    {
                        name:'红烧豆腐',
                        src:'http://s2.cdn.xiachufang.com/195d38a2880211e6a9a10242ac110002_600w_400h.jpg?imageView2/1/w/375/h/259/interlace/1/q/90'
                    }
                ]
            }
        },

    }
</script>