import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'//全局UI库
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import http from './components/http/service.js'//请求服务
Vue.prototype.$http = http

import filters from './components/filter/filter.js'//公共过滤器
for (let key in filters) {
  Vue.filter(key,filters[key])
}

import load from './components/common/common.js'//全局公共函数
Vue.prototype.load = load

import cont from './components/content/content.js'//常量表
Vue.prototype.cont = cont

import VueQuillEditor from 'vue-quill-editor'//富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')