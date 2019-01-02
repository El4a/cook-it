import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'
import router from './services/RouterService'

Vue.use(VueHead)
Vue.config.productionTip = false

/**
 * Vue instance
 */
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')


/**
 * pipes
 */
Vue.filter('uppercase', function (value) {
  return value.toUpperCase();
})

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})