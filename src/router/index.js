import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from "@/views/UserProfile";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId', // 여기에서 :userId는 변수처럼 사용하는 경로이다. 스프링의 @Pathvariable과 같다
    name: 'UserProfile',
    component: UserProfile
  },
  /*{
    path: '/about',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
