import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/global.less"

/** Ant-design */
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

/** Vant */
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

/** MyComponent */
import Component from '@components/index'
Vue.use(Component)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
