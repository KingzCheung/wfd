<template>
    <div class="comment">
        <a class="coll">
            <i class="iconfont icon-favorite"><sup>{{coll}}</sup></i>
        </a>
        <input type="text" name="comment" placeholder="写点什么吧">
        <input type="hidden" name="cook_id" :value="cook">
        <button type="button" class="submit" @click="submit">评论</button>
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
            },
            cook: Number
        },
        methods: {
            submit: function () {
                //验证
                if (!localStorage.getItem('uid')) {
                    this.$router.push({
                        name: 'signin'
                    });
                    return;
                }
                let uid = localStorage.getItem('uid');
                let cook_id = document.querySelector('input[name="cook_id"]').value;
                this.$http.post(this.$config.api('comment/list/' + cook_id), {
                    comment: document.querySelector('input[name="comment"]').value,
                    uid: uid
                }).then(function (resp) {
                    console.log(resp.data)
                })
            }
        }

    }
</script>