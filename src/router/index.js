import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import minji from '@/components/minji'
import hanni from '@/components/hanni'
import danielle from '@/components/danielle'
import haerin from '@/components/haerin'
import hyein from '@/components/hyein'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/minji',
      name: 'minji',
      component: minji
    },
    {
      path: '/hanni',
      name: 'hanni',
      component: hanni
    },
    {
      path: '/danielle',
      name: 'danielle',
      component: danielle
    },
    {
      path: '/haerin',
      name: 'haerin',
      component: haerin
    },
    {
      path: '/hyein',
      name: 'hyein',
      component: hyein
    }
  ]
})
