import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PostView from '@/views/PostView.vue'
import NotFound from '@/components/NotFound.vue'
import PostDetails from '@/components/postFolder/PostDetails.vue'


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
  },
  {
    path: '/post',
    name: 'post',
    component: PostView,
    meta: { keepAlive: true }
  },
  {
    path: '/post-details/:id',
    name: 'postDetails',
    component: PostDetails,
    meta: { keepAlive: true }
  },
  {
    path : '/:catchAll(.*)',
    name : 'NotFound',
    component : () => NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      // Otherwise, scroll to the top of the page
      return { top: 0 };
    }
  }
})

export default router
