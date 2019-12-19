import Vue from 'vue'

import 'normalize.css/normalize.css' // 一个css的标准化样式表，为了让不同浏览器的css样式都兼容

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import Mixin from './mixins'
import "@/assets/font/style.css";
import * as filters from './filters' // 全局引入过滤器

// import './mock/index'
Vue.use(Element)
// 全局混入方法
Vue.mixin(Mixin)
// 全局注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
