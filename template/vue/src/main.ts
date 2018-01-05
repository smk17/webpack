{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCordova from 'vue-cordova'

Vue.use(VueCordova)
Vue.config.productionTip = false

document.addEventListener('deviceready', function () {
  console.log('deviceready')
}, false)

/* eslint-disable no-new */

const init = new Vue({
  el: '#app',
  store,
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
