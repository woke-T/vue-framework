/*
 * @Author: woke
 * @Date: 2020-11-30 15:35:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 16:48:45
 * @Description: 工具函数
 */

/**
 * @description 调整html元素font-size
 * @param {设计稿宽度} designWidth
 * @param {最小宽度} minWidth
 * @param {最大宽度} maxWidth
 */
export const adaptHtmlSize = (designWidth, minWidth = 320, maxWidth = 2080) => {
  let screenWidth = window.innerWidth
  if (maxWidth && maxWidth < screenWidth) {
    screenWidth = maxWidth
  }
  if (minWidth > screenWidth) {
    screenWidth = minWidth
  }
  let htmlSize = screenWidth / designWidth * 100
  document.documentElement.style.fontSize = `${htmlSize}px`
  document.body.style.fontSize = '16px'
  document.body.style.minWidth = `${minWidth}px`
}

/**
 * @description 从路由中获取菜单列表
 * @param {配置路由数组} routes
 */
export const getMenuList = routes => {
  return routes.filter(item => !(item.meta && item.meta.hideInMenu)).map(item => {
    let menu = {
      path: item.path,
      title: item.meta.title,
      icon: item.meta.icon,
      children: []
    }
    if (item.children && item.children.length) {
      menu.children = getMenuList(item.children)
    }
    return menu
  })
}

/**
 * @description 判断是否为移动端
 */
export const isMobile = () => {
  let info = navigator.userAgent
  let agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod', 'iPad']
  for (let i = 0; i < agents.length; i++) {
    if (info.includes(agents[i])) {
      return true
    }
  }
  return false
}
