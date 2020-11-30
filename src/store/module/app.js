/*
 * @Author: woke
 * @Date: 2020-11-05 09:24:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 16:46:18
 * @Description: 
 */
import routers from '@/router/routes'
import { getMenuList } from '@/utils/tools'
export default {
  state: {
    loading: false
  },
  getters: {
    pcMenuList: () => getMenuList(routers),
    loading: state => state.loading
  },
  mutations: {
    save (state, payload) {
      state = Object.assign(state, payload)
    }
  },
  actions: {
  }
}
