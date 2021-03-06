import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/hello/HelloPage.vue'
import IndexPage from '@/pages/index/IndexPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
