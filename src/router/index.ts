import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
  // {
  //     path: '/axios',
  //     name: 'Axios',
  //     component: () => import('@/views/axios.vue') // 懒加载组件
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
