import Vue from 'vue'
import router from './router'
import store from './store/store'

import VueSax from 'vuesax'
import 'vuesax/dist/vuesax.css'

import 'material-icons/iconfont/material-icons.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueSax)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
