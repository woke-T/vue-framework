/*
 * @Author: woke
 * @Date: 2020-11-30 15:26:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 16:49:46
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from '@/utils/filters'
import './theme.scss'


Vue.config.productionTip = false

Vue.use(filters)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
