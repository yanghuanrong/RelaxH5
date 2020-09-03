import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/global.less"

/** view-design */
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI, {
  transfer: true,
});

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
