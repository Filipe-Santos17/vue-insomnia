import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LayoutContainer from "@/layouts/LayoutContainer.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: LayoutContainer
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
