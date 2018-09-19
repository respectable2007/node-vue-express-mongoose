import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import login from '../views/login/index.vue'
import home from '../views/home/index.vue'
import layout from '../views/layout/index.vue'
import publicIndex from '../views/public/index.vue'
const router = new Router({
  routes: [
    { 
	  path: '/', 
	  component: login
    },
    {
      path: '/home',
      component: home
    },
    { path: '/layout',
      component: layout,
      children: [{
      	path: 'public',
        component:publicIndex
      }]
    }
  ]
})

export default router