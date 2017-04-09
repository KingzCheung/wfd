<template>
    <div id="tab">
        <div class="tabbar">
            <router-link to="/" class="tab-item" exact>
                <div class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-compass"></use>
                    </svg>
                </div>
                <h3 class="item-label">首页</h3>
            </router-link>

            <router-link to="/viewlist" class="tab-item">
                <div class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-viewlist"></use>
                    </svg>
                </div>
                <h3 class="item-label">榜单</h3>
            </router-link>

            <router-link to="/category" class="tab-item">
                <div class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-viewgallery"></use>
                    </svg>
                </div>
                <h3 class="item-label">分类</h3>
            </router-link>

            <router-link to="/user" class="tab-item">
                <div class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-account"></use>
                    </svg>
                </div>
                <h3 class="item-label">我的(开发中)</h3>
            </router-link>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'w-tab',
        data () {
            return {
                isActive: false
            }
        },

        methods:{

        }

    }
</script>