import Vue from 'vue'
import App from './App.vue'

import iview from './iview/iview'
import 'iview/dist/styles/iview.css';

import router from './router';

import Service from './service'
window._S = Service;

Vue.config.productionTip = false

import store from './store';
Vue.use(iview);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
