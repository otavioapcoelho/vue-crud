import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home'
import Users from '@/users/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: 'users',
        name: 'Users',
        component: Users
      }]
    }
  ]
})
