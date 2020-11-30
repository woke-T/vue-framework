/*
 * @Author: woke
 * @Date: 2020-11-07 10:10:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 16:42:55
 * @Description: 
 */

export default {
  /**
   * @description 从富文本中截取文字内容
   * @param {content} 富文本内容
   */
  hideTag: (content) => {
    let text = ''
    if (content) {
      text = content.replace(/<[^>]+>|&nbsp;/g, '')
    }
    return text
  },
}