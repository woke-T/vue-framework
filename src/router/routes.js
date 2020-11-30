/*
 * @Author: woke
 * @Date: 2020-11-05 09:24:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 15:43:53
 * @Description: 
 */
const Home = () => import(/* webpackChunkName: "home" */'@/pages/home')

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '*',
    redirect: '/home'
  }
]