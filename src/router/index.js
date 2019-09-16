import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 不需要权限的路由表
const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index')
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index')
  }
]

// 异步路由表
const asyncRoutes = [
  {
    path: '/table',
    name: '表格',
    component: () => import('@/views/table/index')
  }
]

/**
 * 创建路由
 */
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }), // 每次跳转路由都定位到页面顶部
  routes: constantRoutes // 将不需要权限的路由放出来，routes 这个键值是固定的
})

const router = createRouter()

export default router

export {
  asyncRoutes,
  constantRoutes
}
