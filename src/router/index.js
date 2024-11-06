import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Shop from '../views/Shop.vue'
import GlassSkinDuo from '../views/GlassSkinDuo.vue'
import Account from '../views/Account.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/glass-skin-duo',
      name: 'glassSkinDuo',
      component: GlassSkinDuo
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

export default router