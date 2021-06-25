import { createRouter, createWebHistory } from 'vue-router'
import { getUserState } from './firebase'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/',
    name: 'Home',
    component: import('../views/Home.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: import('../views/About.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/profile',
    meta: { requiresAuth: true, title: 'Profile' },
    component: import('../views/Profile.vue'),
    meta: { title: 'Profile' }
  },
  {
    path: '/signup',
    meta: { title: 'Sign Up' },
    component: import('../views/SignUp.vue'),
    meta: { title: 'Sign Up' }
  },
  {
    path: '/login',
    meta: { requiresAuth: true, title: 'Login' },
    component: import('../views/Login.vue'),
    meta: { title: 'Login' }
  },
  {
    path: '/orders',
    meta: { requiresAuth: true, title: 'Orders' },
    component: import('../views/Orders.vue'),
    meta: { title: 'Orders' }
  },
  {
    path: '/:path(.*)',
    component: NotFound
  },
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
