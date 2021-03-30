import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/vista2/:id',
    name: 'Vista2',
    //component: Home
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Vista2.vue')
  },
  {
    path: '/vista3',
    name: 'Vista3',
    //component: Home
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Vista3.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
