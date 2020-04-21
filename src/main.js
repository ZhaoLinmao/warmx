import Vue from "vue";

import Cookies from 'js-cookie'

// 统一浏览器初始化css样式
import 'normalize.css'

// 导入elementUI的js包
import Element from 'element-ui';
// 导入elementUI的css插件
import 'element-ui/lib/theme-chalk/index.css';
// alibaba的 font 图标字体库
import '@fonts/iconfont.css';
//全局css文件
import '@styles/index.scss'

//导入语言包
import local from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(Element, {
  // size: Cookies.get('size') || 'medium', // set element-ui default size
  local:local
})

import App from "./App";
import router from "./router";
import store from "./store";

import '@assets/icons' // icon
import './permission' // permission control

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
