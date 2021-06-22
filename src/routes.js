import Home from './views/Home.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/profile',
    meta: { title: 'Profile' },
    component: Profile,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/signup',
    meta: { title: 'Sign Up' },
    component: SignUp,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/login',
    meta: { title: 'Login' },
    component: Login,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/:path(.*)',
    component: NotFound
  },
]
