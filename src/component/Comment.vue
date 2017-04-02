<template>
    <div class="comment">
        <a class="coll">
            <i class="iconfont icon-favorite"><sup>{{coll}}</sup></i>
        </a>
        <input type="text" name="comment" placeholder="写点什么吧">
        <button type="button" class="submit">评论</button>
    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>


    export default {
        name: 'comment',
        data () {
            return {
                msg: 'Welcome to Foo'
            }
        },
        props: {
            coll: {
                type: Number,
                default: 0
            }
        }

    }
</script>