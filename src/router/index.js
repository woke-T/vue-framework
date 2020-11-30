/*
 * @Author: woke
 * @Date: 2020-11-05 09:24:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 15:42:54
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})

export default router

