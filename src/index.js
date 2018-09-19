import Vue from 'vue'
import App from './App.vue'

import router from './route/index'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

import axios from './utils/axios'
Vue.use(axios)
new Vue({
  el: '#app',
  // render: h => h(App), // 运行时版本
  template: '<App/>', // 完整时版本
  router: router,
  components: { App }
})

