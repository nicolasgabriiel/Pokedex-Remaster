import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: () => import('../views/Individual.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
