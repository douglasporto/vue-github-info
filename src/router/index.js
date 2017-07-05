import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/app/search'
import User from '@/app/github/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/user/:user',
      name: 'User',
      component: User
    }
  ]
})
