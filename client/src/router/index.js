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
    path: '/user/create',
    name: 'userCreateView',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/userCreateView.vue')
  },
  {
    path: '/user/detail',
    name: 'userDetailView',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/userDetailView.vue')
  },
  {
    path: '/user/change',
    name: 'userChangeView',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/userChangeView.vue')
  },
  {
    path: '/customer/create',
    name: 'customerCreate',
    component: () =>
      import(
        /* webpackChunkName: "customer" */ '../views/CustomerCreateView.vue'
      )
  },
  // {
  //   path: '/customer/list',
  //   name: 'customerList',
  //   component: () =>
  //     import(/* webpackChunkName: "customer" */ '../views/CustomerListView.vue')
  // },
  {
    path: '/customer/list/auditor',
    name: 'CustomerListByAuditor',
    component: () =>
      import(
        /* webpackChunkName: "customer" */ '../views/CustomerListByAuditorView.vue'
      )
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
    name: 'CustomerChangeView',
    component: () =>
      import(
        /* webpackChunkName: "customer" */ '../views/CustomerChangeView.vue'
      )
  },
  // {
  //   path: '/customer/cert/',
  //   name: 'CertCreateView',
  //   component: CertCreateView,
  //   props: true
  // },
  {
    path: '/customer/cert',
    name: 'CertCreateView',
    component: () =>
      import(/* webpackChunkName: "cert" */ '../views/CertCreateView.vue')
  },
  {
    path: '/customer/cert/change',
    name: 'CertChangeView',
    component: () =>
      import(/* webpackChunkName: "cert" */ '../views/CertChangeView.vue')
  },

  {
    path: '/customer/cert/list',
    name: 'AuditListView',
    component: () =>
      import(/* webpackChunkName: "cert" */ '../views/AuditListView.vue')
  },
  {
    path: '/customer/cert/detail',
    name: 'AuditDetailView',
    component: () =>
      import(/* webpackChunkName: "cert" */ '../views/AuditDetailView.vue')
  },

  {
    path: '/customer/cr',
    name: 'CustomerDoCRView',
    component: () =>
      import(/* webpackChunkName: "cr" */ '../views/CustomerDoCRView.vue')
  },
  {
    path: '/customer/cr/list',
    name: 'CRListView',
    component: () =>
      import(/* webpackChunkName: "cr" */ '../views/CRListView.vue')
  },
  {
    path: '/customer/cr/detail',
    name: 'CrDetailView',
    component: () =>
      import(/* webpackChunkName: "cr" */ '../views/CrDetailView.vue')
  },
  // {
  //   path: '/admin/list',
  //   name: 'adminView',
  //   component: () =>
  //     import(/* webpackChunkName: "admin" */ '../views/AdminView.vue')
  // },
  {
    path: '/report/trans',
    name: 'ReportTransView',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/ReportTransView.vue')
  },
  {
    path: '/report/s1',
    name: 'ReportS1View',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/ReportS1View.vue')
  },
  {
    path: '/report/s2',
    name: 'ReportS2View',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/ReportS2View.vue')
  },
  {
    path: '/report/contract',
    name: 'ContractView',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/ContractView.vue')
  },
  {
    path: '/report/audit/plan',
    name: 'AuditPlanView',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/AuditPlanView.vue')
  },
  {
    path: '/report/list',
    name: 'ReportListView',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/ReportListView.vue')
  },
  {
    path: '/upload/list',
    name: 'UploadReportListView',
    component: () =>
      import(
        /* webpackChunkName: "report" */ '../views/UploadReportListView.vue'
      )
  },
  {
    path: '/report/trans/detail',
    name: 'ReportTransDetailView',
    component: () =>
      import(
        /* webpackChunkName: "report" */ '../views/ReportTransDetailView.vue'
      )
  },
  {
    path: '/report/trans/change',
    name: 'ReportTransChangeView',
    component: () =>
      import(
        /* webpackChunkName: "report" */ '../views/ReportTransChangeView.vue'
      )
  },

  {
    path: '/report/s1/detail',
    name: 'ReportS1DetailView',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/ReportS1DetailView.vue')
  },
  {
    path: '/report/s1/change',
    name: 'ReportS1ChangeView',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/ReportS1ChangeView.vue')
  },
  {
    path: '/report/s2/detail',
    name: 'ReportS2DetailView',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/ReportS2DetailView.vue')
  },
  {
    path: '/report/s2/change',
    name: 'ReportS2ChangeView',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/ReportS2ChangeView.vue')
  },
  {
    path: '/upload/trans',
    name: 'UploadTransView',
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/UploadTransView.vue')
  },

  {
    path: '/upload/s1',
    name: 'UploadS1View',
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/UploadS1View.vue')
  },

  {
    path: '/upload/s2',
    name: 'UploadS2View',
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/UploadS2View.vue')
  },
  {
    path: '/upload/detail/trans',
    name: 'UploadTransDetailView',
    component: () =>
      import(
        /* webpackChunkName: "upload" */ '../views/UploadTransDetailView.vue'
      )
  },
  {
    path: '/upload/detail/s1',
    name: 'UploadS1DetailView',
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/UploadS1DetailView.vue')
  },
  {
    path: '/upload/detail/s2',
    name: 'UploadS2DetailView',
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/UploadS2DetailView.vue')
  },
  {
    path: '/upload/trans/change',
    name: 'UploadTransChangeView',
    component: () =>
      import(
        /* webpackChunkName: "upload" */ '../views/UploadTransChangeView.vue'
      )
  },
  {
    path: '/upload/s1/change',
    name: 'UploadS1ChangeView',
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/UploadS1ChangeView.vue')
  },
  {
    path: '/upload/s2/change',
    name: 'UploadS2ChangeView',
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/UploadS2ChangeView.vue')
  },
  {
    path: '/mgt/signal',
    name: 'AuditSignalRampView',
    component: () =>
      import(/* webpackChunkName: "mgt" */ '../views/AuditSignalRampView.vue')
  },
  {
    path: '/mgt/tax',
    name: 'TaxInvoiceCreateView',
    component: () =>
      import(/* webpackChunkName: "mgt" */ '../views/TaxInvoiceCreateView.vue')
  },
  {
    path: '/mgt/tax/detail',
    name: 'TaxInvoiceDetailView',
    component: () =>
      import(/* webpackChunkName: "mgt" */ '../views/TaxInvoiceDetailView.vue')
  },
  {
    path: '/mgt/tax/change',
    name: 'TaxInvoiceChangeView',
    component: () =>
      import(
        /* webpackChunkName: "report" */ '../views/TaxInvoiceChangeView.vue'
      )
  },
  {
    path: '/mgt/fee',
    name: 'CashCreateView',
    component: () =>
      import(/* webpackChunkName: "mgt" */ '../views/CashCreateView.vue')
  },
  {
    path: '/mgt/fee/detail',
    name: 'CashDetailView',
    component: () =>
      import(/* webpackChunkName: "mgt" */ '../views/CashDetailView.vue')
  },
  {
    path: '/mgt/fee/change',
    name: 'CashChangeView',
    component: () =>
      import(/* webpackChunkName: "mgt" */ '../views/CashChangeView.vue')
  },
  {
    path: '/mgt/upload/cert',
    name: 'UploadCertCreateView',
    component: () =>
      import(/* webpackChunkName: "mgt" */ '../views/UploadCertCreateView.vue')
  },
  {
    path: '/mgt/upload/cert/detail',
    name: 'UploadCertDetailView',
    component: () =>
      import(/* webpackChunkName: "mgt" */ '../views/UploadCertDetailView.vue')
  },
  {
    path: '/mgt/upload/cert/change',
    name: 'UploadCertChangeView',
    component: () =>
      import(
        /* webpackChunkName: "report" */ '../views/UploadCertChangeView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// ==????????? ??????????????? ==============================
router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)

  // const isLogin = store.getters['user/isLogin']
  // console.log(isLogin)

  if (to.path === '/login') {
    next()
  } else {
    if (store.getters['user/isLogin']) {
      next()
    } else {
      store.commit('/user/logout')
      next('/login')
    }
  }
})
//   //     next()
//   //   }
//   // } else {
//   //   return next({ path: '/login' })
//   // }

// if (to.path === '/') {
//   next()
// } else {
//   if (isLogin) {
//     next()
//   } else {
//     // store.commit('user/logout')
//     next('/login')
//   }
// }

export default router
