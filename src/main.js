import Vue from 'vue'
import App from './App.vue'

import axios from 'axios';
import qs from 'qs';

import router from './router/index';
import store from './store/index';

Vue.prototype.$axios = axios;  
Vue.prototype.$qs = qs;    

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
