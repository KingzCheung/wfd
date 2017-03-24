import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {Tabbar, TabItem, Swipe, SwipeItem, Field, Switch} from 'mint-ui';
import w_head from './component/Header.vue';
import w_tab from './component/Tabbar.vue';
import './fonts/iconfont.css';
import './fonts/iconfont';
import router from './config/router';
import axios from 'axios';
import config from './config/config';
import store from  './config/store';

Vue.prototype.$http = axios;
Vue.prototype.$config = config;
Vue.use(VueRouter);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(w_head.name, w_head);
Vue.component(w_tab.name, w_tab);

Vue.component(Field.name, Field);
Vue.component(Switch.name, Switch);


new Vue({
    router: router,
    store: store,
    el: '#app',
    render: h => h(App)

});
