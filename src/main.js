// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入router配置
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App }, vue1.0写法
  template: '<App/>',

  //是配置生效
  router,

  //vue2.0写法
  render:h => h(App)
}).$mount('#app')
