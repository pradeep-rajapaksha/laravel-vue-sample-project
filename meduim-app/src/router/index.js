import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from "../oauth/authGuard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/callback/medium',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/post/create',
    name: 'Post-Create',
    component: () => import('../views/PostCreate.vue'),
    beforeEnter: authGuard  
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/Post.vue'),
    beforeEnter: authGuard  
  },
  // {
  //   path: '/posts/:id/edit',
  //   name: 'post-view',
  //   component: () => import('../views/PostCreate.vue'),
  //   beforeEnter: authGuard
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
