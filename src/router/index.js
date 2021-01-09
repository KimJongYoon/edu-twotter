import {createRouter, createWebHistory} from 'vue-router'
import store from '../store'
import { users } from '../assets/users'
import Home from '../views/Home.vue'
import UserProfile from "@/views/UserProfile";
import Admin from "@/views/Admin";

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
  {
    path: '/admin', // 여기에서 :userId는 변수처럼 사용하는 경로이다. 스프링의 @Pathvariable과 같다
    name: 'Admin',
    component: Admin,
    meta: {
      requiesAdmin: true // meta는 각각의 라우터의 정보를 담고 있다. 여기서는 관리자 권한 요구
    }
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

// 각각의 라우터 진입 전에 실행하는 함수
router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user; // Vuex에서 관리하고 있는 user 객체이다.

  if (!user) { // user가 null인 경우
    await store.dispatch('User/setUser', users[0]) //store.dispatch는  store.action 대신에 사용
  }

  const isAdmin = false;
  const requiesAdmin = to.matched.some( record => record.meta.requiesAdmin) // 라우터의 meta 정보를 가져와서 requiesAdmin가 true면 true 값을 반환한다.

  if (requiesAdmin && !isAdmin) next({ name: 'Home' }) // 라우터는 관리자 권한을 요구하고 사용자가 관리자 권한이 아니면 Home 라우터로 이동
  else next(); // 사용자가 관리자 권한이면 요청한 페이지 그대로 넘어간다
})

export default router
