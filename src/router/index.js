import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NewsList from '@/components/NewsList'
import Fail from '@/components/Fail'
import Detail from '@/components/Detail'
import Assistant from '@/components/Assistant'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/list',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/fail',
      name: 'Fail',
      component: Fail
    },
    {
      path: '/detail/:newsId',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/assistant',
      name: 'Assistant',
      component: Assistant
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
