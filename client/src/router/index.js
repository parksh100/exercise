import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AuditorView from '@/views/AuditorView.vue'
import DashBoardView from '@/views/DashBoardView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'login',
  //   component: LoginView
  // },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoardView
  },

  {
    path: '/login',
    name: 'login',
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
  },
  {
    path: '/customer/detail',
    name: 'customerDetail',
    component: () =>
      import(
        /* webpackChunkName: "customer" */ '../views/CustomerDetailView.vue'
      )
  },
  {
    path: '/customer/change',
    name: 'customerChange',
    component: () =>
      import(
        /* webpackChunkName: "customer" */ '../views/CustomerChangeView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)

  const isLogin = store.getters['user/isLogin']
  console.log(isLogin)

  // if (to.path === '/login') {
  //   next()
  // } else if (isLogin) {
  //   if (to.path === '/') {
  //     next({ path: '/' })
  //   } else {
  //     next()
  //   }
  // } else {
  //   return next({ path: '/login' })
  // }

  if (to.path === '/') {
    next()
  } else {
    if (isLogin) {
      next()
    } else {
      store.commit('user/logout')
      next('/login')
    }
  }
})

export default router
