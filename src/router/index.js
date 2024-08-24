import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { keepAlive: true }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { keepAlive: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
