/*
 * @Author: woke
 * @Date: 2020-11-30 16:13:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 16:31:39
 * @Description:
 */

// 项目部署目录
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '/api': '' }
      }
    }
  },
  productionSourceMap: false
}