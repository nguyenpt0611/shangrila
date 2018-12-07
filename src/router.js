import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Directory from './views/Directory'
import Structure from './views/Structure'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/directory',
      name: 'Directory',
      component: Directory
    },
    {
      path: '/structure',
      name: 'Structure',
      component: Structure
    },
  ]
})
