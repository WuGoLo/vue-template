import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import router from '@/router/index'
import store from '@/store'
import qs from 'qs'

// create an axios instance

const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000, // request timeout
  withCredentials: true,
  // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Beixin-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-xiangmu-Token'] = "token23423"
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response
  }, error => {
    // for debug
    let err = error.response
    let userType = window.sessionStorage.getItem("userType");
    console.log(err)
    if(err != undefined) {
      switch (err.status) {
        case 401:
          router.replace({
            path: '/'
          })
          Message.error(err.data.msg || "请先登录用户！")
        case 500:
          Message.error(err.data.msg)
          break
      }
      return Promise.reject(error.response)
    } else {
      Message.error('服务器异常，请联系管理员！')
      router.replace({
        path: '/'
      })
    }
  })

export default service
