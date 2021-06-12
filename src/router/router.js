import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../components/login/Login.vue'
import index from '../components/index/index.vue'
import error from '../components/error/error.vue'
import home from '../components/home/home.vue'

const routes =  [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/index',
    component: index,
    children: [
      { path: 'home', component: home },
      { path: 'error', component: error },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    token ? next() : next('/login')
  }
})

// 导出 路由
export default router
