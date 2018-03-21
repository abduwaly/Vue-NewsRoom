import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewsList from '@/components/NewsList'
import Fail from '@/components/Fail'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
