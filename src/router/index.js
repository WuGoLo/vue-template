import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

const constantRouterretire = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    name: 'lmap',
    path: '/lmap',
    redirect: '/lmap/leaflet',
    component: Layout,
    meta: {
      title: '超图案例'
    },
    children: [
      {
        name: 'leaflet',
        path: 'leaflet',
        component: () => import('@/views/map/leaflet'),
        meta: { title: '超图leaflet地图', noCache: true }
      }
    ]
  },
  {
    name: 'cmap',
    path: '/cmap',
    redirect: '/cmap/classic',
    component: Layout,
    meta: {
      title: '超图案例'
    },
    children: [
      {
        name: 'classic',
        path: 'classic',
        component: () => import('@/views/map/classic'),
        meta: { title: '超图classic地图', noCache: true }
      }
    ]
  },

  { path: '*', redirect: '/404', component: () => import('@/views/errorPage/404') }
]

const router = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterretire
})

// 路由前置守卫
router.beforeEach((to, from, next) => {
  next()
})
export default router
