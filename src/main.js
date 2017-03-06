import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {Tabbar, TabItem, Swipe, SwipeItem} from 'mint-ui';
import w_head from './component/Header.vue';
import User from './component/User.vue';
import Viewlist from './component/ViewList.vue';
import Add from  './component/Add.vue';
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
            path: '/',
            name: 'index',
            component: (resolve) => {
                require(['./component/Index.vue'], resolve)
            }
        }
    ]
});

new Vue({
    router: router,
    el: '#app',
    render: h => h(App)

});
