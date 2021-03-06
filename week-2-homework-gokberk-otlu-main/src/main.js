import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vue-router'
import './plugins/vuelidate-plugin'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
});

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
