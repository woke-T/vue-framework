/*
 * @Author: woke
 * @Date: 2020-10-21 15:46:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-30 16:58:08
 * @Description: 
 */
module.exports = {
  root: true,
  env: {
    "node": true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  parserOptions: {
    "parser": "babel-eslint"
  },
  rules: {
    "no-unused-vars": "warn",
    "no-debugger": "warn",
    "quotes": ["warn", "single"],
    "semi": ["warn", "never"],
    "space-before-function-paren": ["warn", "always"],
  }
}
