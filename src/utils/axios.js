import axios from 'axios'
import { Message } from 'iview'
let Axios = axios.create({
  timeout: 10000
})
Axios.interceptors.response.use(res => {
  if (res.data.code !== 200) {
    Message.error(res.data.message)
  }
  return res.data
}, (error => {
  Message.error(error)
}))
export default {
  install: function(Vue, Option) {
  	Vue.prototype.axios = Axios
    // Object.defineProperty(Vue.prototype, 'axios', { value: Axios })
  }
}