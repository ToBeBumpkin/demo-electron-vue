import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/LandingPage').default
    },
    {
        path: '/create',
        name: 'create',
        component: require('@/pages/Create').default
    },
    {
        path: '/landing',
        name: 'landing',
        component: require('@/components/LandingPage').default,
        meta: {
            title: '需要权限登录',
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
