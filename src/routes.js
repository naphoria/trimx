import { createRouter, createWebHistory } from 'vue-router'
import { getUserState } from './firebase'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'),
    meta: { requiresAuth: true, title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
    meta: { requiresAuth: true, title: 'About' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('./views/Profile.vue'),
    meta: { requiresAuth: true, title: 'Profile' }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('./views/SignUp.vue'),
    meta: { requiresAuth: false, title: 'Sign Up' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login.vue'),
    meta: { requiresAuth: false, title: 'Login' },
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('./views/Orders.vue'),
    meta: { requiresAuth: true, title: 'Orders' },
  },
  {
    path: '/:path(.*)',
    component: () => import('./views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)

  const isAuth = await getUserState()

  if (requiresAuth && !isAuth) next('/login')
  else if (requiresUnauth && isAuth) next('/')
  else next()
})

export default router
