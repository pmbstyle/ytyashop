import Vue from 'vue'
import './assets/saas/app.scss'
import App from './App.vue'
import router from './router'
import store from './store'

import VModal from 'vue-js-modal'
import Notifications from 'vue-notification'
Vue.use(Notifications)
Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
