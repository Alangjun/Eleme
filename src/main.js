// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods.vue'   // 引入组件
import ratings from './components/ratings/ratings.vue'   // 引入组件
import seller from './components/seller/seller.vue'   // 引入组件

import './common/stylus/index.styl'

Vue.use(VueRouter) // 使用vue-resource或vue-router等全局组件时，必须通过Vue.use方法引入，才起作用
Vue.use(VueResource)
// 配置路由
const routes = [
  {path: '/', component: goods},   // 默认加载的页面
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]

const router = new VueRouter({
  linkActiveClass: 'active',  // 将激活的路由添加一个类
  routes
})

new Vue({
  router,
  ...App
}).$mount('#app')
