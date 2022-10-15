import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AuditorView from '@/views/AuditorView.vue'
import DashBoardView from '@/views/DashBoardView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoardView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login2',
    component: LoginView
  },
  {
    path: '/auditor',
    name: 'auditor',
    component: AuditorView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/HelloView.vue')
  },
  {
    path: '/customer/create',
    name: 'customerCreate',
    component: () =>
      import(
        /* webpackChunkName: "customer" */ '../views/CustomerCreateView.vue'
      )
  },
  {
    path: '/customer/list',
    name: 'customerList',
    component: () =>
      import(/* webpackChunkName: "customer" */ '../views/CustomerListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)
  // console.log(store.getters['user/isLogin'])
  // 사용자가 로그인 되었으면 next()를 호출하고, 로그인이 되지 않았으면 login 페이지로 이동시킨다.
  // use.js/getter에서 isLogin을 정의하고, 그 값을 이용한다.
  if (to.path === '/home') {
    next()
  } else {
    if (store.getters['user/isLogin']) {
      next()
    } else {
      store.commit('user/logout')
      next('/')
    }
  }
})

export default router
