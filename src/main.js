import Vue from 'vue';
import App from './App.vue';

// 全局挂载 axios
import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = process.env.VUE_APP_URL;
Vue.prototype.$axios = axios;  
Vue.prototype.$qs = qs;  

// 全局挂载 ViewUI
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

// 全局挂载 echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts; 

import router from './router/index';
import store from './store/index';
  
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
