import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from '@/components/HelloWorld'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})

export default router