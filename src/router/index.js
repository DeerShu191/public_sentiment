import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/views/login/Login'
import Analysis from '@/views/Analysis'
import Hot from '@/views/Hot'
import Newspaper from '@/views/Newspaper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/Analysis',
      name: 'Analysis',
      component: Analysis
    },
    {
      path: '/Newspaper',
      name: 'Newspaper',
      component: Newspaper
    }
  ]
})
