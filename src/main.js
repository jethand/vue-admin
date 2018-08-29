import Vue from 'vue';
import App from './App.vue';

import iview from './iview/iview';
import 'iview/dist/styles/iview.css';

import router from './router';

import store from './store';

import Service from './service';

window._S = Service;

Vue.config.productionTip = false;

Vue.use(iview);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
