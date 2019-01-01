import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'
import router from './services/RouterService'

Vue.use(VueHead)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

