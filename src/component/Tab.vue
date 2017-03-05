<template>
    <div id="tablist">
        <ul class="tab-list">
            <li v-for='(item,index) in titlelist' v-text="item" :class="{current:iscur==index}" @click="iscur=index"
                class="list"></li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'tab',
        data () {
            return {
                iscur: 0,
                titlelist: ['菜谱', '收藏']
            }
        },

    }
</script>