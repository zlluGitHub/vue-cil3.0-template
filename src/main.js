import Vue from 'vue';
import App from './App.vue';

//挂载 api
import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = process.env.VUE_APP_URL;
Vue.prototype.$axios = axios;  
Vue.prototype.$qs = qs;  

import router from './router/index';
import store from './store/index';
  
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
