/*
 * @Author: woke
 * @Date: 2020-11-07 10:10:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 16:40:32
 * @Description:  
 */
import fns from './fns'

let filters = {}

filters.install = (Vue) => {
  for (let [key, value] of Object.entries(fns)) {
    Vue.filter(key, value)
  }

}

export default filters