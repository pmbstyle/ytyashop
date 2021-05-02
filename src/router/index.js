import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/server/:slug',
    name: 'Server',
    component: () => import('../views/Server.vue')
  },
  {
    path: '/server/:slug/product/:id',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
