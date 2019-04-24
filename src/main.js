import Vue from 'vue'
import App from './App.vue'
import SimpleVueValidation from 'simple-vue-validator';
import VueRouter from 'vue-router'
import Vuex from 'vuex';

import router from './router'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(SimpleVueValidation);
Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
