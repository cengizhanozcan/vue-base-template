import Vue from 'vue'
import App from './App.vue'
import router from './router'

import PaperDashboard from './plugins/paperDashboard'

Vue.config.productionTip = false
Vue.use(PaperDashboard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
