import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {Tabbar, TabItem, Swipe, SwipeItem, Field} from 'mint-ui';
import w_head from './component/Header.vue';
import User from './component/User.vue';
import Viewlist from './component/ViewList.vue';
import Add from  './component/Add.vue';
import Signin from  './component/Signin.vue';
import './fonts/iconfont.css';
import './fonts/iconfont';

Vue.use(VueRouter);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(w_head.name, w_head);
Vue.component(Viewlist.name, Viewlist);
Vue.component(Add.name, Add);
Vue.component(Signin.name, Signin);
Vue.component(Field.name, Field);

const router = new VueRouter({
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
            path: '/',
            name: 'index',
            component: (resolve) => {
                require(['./component/Index.vue'], resolve)
            }
        },
        {
            path: '*', //其他页面，强制跳转
            redirect: '/'
        }
    ]
});

new Vue({
    router: router,
    el: '#app',
    render: h => h(App)

});
