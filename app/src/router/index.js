import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home'),
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/Index'),
        children: [
          {
            path: ':id',
            name: 'index-detail',
            component: () => import('../views/Detail'),
          }
        ]
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('../views/Category'),
        children: [
          {
            path: ':id',
            name: 'category-detail',
            component: () => import('../views/Detail'),
          }
        ]
      },
      {
        path: 'shopping',
        name: 'shopping',
        component: () => import('../views/Shopping'),
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('../views/My'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/Login'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/Register'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
