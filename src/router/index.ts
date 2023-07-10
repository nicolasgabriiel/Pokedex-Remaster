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
    component: () => import('../views/PageIndividualPokemon.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

let isReloading = false

router.beforeEach((to, from, next) => {
  if (to.query.reload === 'true' && !isReloading) {
    isReloading = true
    // Recarrega a rota programaticamente
    router.replace({ ...to, query: { ...to.query, reload: undefined } }).then(() => {
      isReloading = false
      window.location.reload()
    })
  } else {
    next() // Permite a navegação normalmente
  }
})





export default router
