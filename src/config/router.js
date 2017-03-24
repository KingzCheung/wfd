/**
 * Created by kingzcheung on 2017/3/15.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Viewlist from '../views/ViewList.vue';
import Add from  '../views/Add.vue';
import Signin from  '../views/Signin.vue';
import Setting from  '../views/Setting.vue';
import Cookbook from  '../views/Cookbook.vue';
import Category from  '../views/Category.vue';
import User from '../views/User.vue';
import Notfound from '../views/Notfound.vue';

Vue.component(Viewlist.name, Viewlist);
Vue.component(Add.name, Add);
Vue.component(Cookbook.name, Cookbook);
Vue.component(Category.name, Category);
Vue.component(Signin.name, Signin);
Vue.component(Setting.name, Setting);
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [
        {
            path: '/add',
            name: 'add',
            component: Add
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/viewlist',
            name: 'viewlist',
            component: Viewlist
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        },
        {
            path: '/cookbook/:id',
            name: 'cookbook',
            component: Cookbook
        },
        {
            path: '/category',
            name: 'category',
            component: Category
        },
        {
            path: '/category/:ids',
            name: 'subCategory',
            component: Category
        },
        {
            path: '/notfound',
            name: 'notfound',
            component: Notfound
        },
        {
            path: '/',
            name: 'index',
            component: (resolve) => {
                require(['../views/Index.vue'], resolve)
            }
        },
        {
            path: '*', //其他页面，强制跳转
            redirect: '/notfound'
        }
    ]
});

