<template>
    <div id="add">
        <div class="add-cookbook">
            <transition name="fade">
                <router-link to="/user" class="cencel">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </router-link>
            </transition>

            <div class="form">
                <mt-field placeholder="写下您要吃的菜名" type="textarea" rows="4"></mt-field>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "../scss/base.scss";
</style>

<script>


    export default {
        name: 'add',
        data () {
            return {
                msg: 'Add'
            }
        },

    }
</script>