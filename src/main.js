import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {Tabbar, TabItem, Swipe, SwipeItem, Field, Switch} from 'mint-ui';
import w_head from './component/Header.vue';
import './fonts/iconfont.css';
import './fonts/iconfont';
import router from './config/router';
import axios from 'axios';

Vue.prototype.$http = axios;

Vue.use(VueRouter);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(w_head.name, w_head);

Vue.component(Field.name, Field);
Vue.component(Switch.name, Switch);


new Vue({
    router: router,
    el: '#app',
    render: h => h(App)

});
