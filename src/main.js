// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import payBox from './components/payBox';



import 'element-ui/lib/theme-chalk/index.css'; // 默认主题


Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component('payBox',payBox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
