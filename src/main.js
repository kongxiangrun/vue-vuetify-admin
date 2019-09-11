import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './guards' // 导航守卫

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
// vuetify 自定义配置
export default new Vuetify({})

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')