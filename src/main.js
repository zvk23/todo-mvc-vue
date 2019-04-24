import Vue from 'vue'
import App from './App.vue'
import SimpleVueValidation from 'simple-vue-validator';
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

Vue.use(SimpleVueValidation);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
