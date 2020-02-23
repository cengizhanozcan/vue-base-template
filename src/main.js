import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'vue-notifyjs/themes/default.css';
import PaperDashboard from './plugins/paperDashboard';
import axios from './utils/AxiosUtils';
import errorHandler from './utils/ExceptionHandler';
import notificationUtils from './utils/NotificationUtils';
import Vuelidate from 'vuelidate';


Vue.config.productionTip = false;
Vue.use(PaperDashboard);
Vue.use(axios);
Vue.use(errorHandler);
Vue.use(notificationUtils);
Vue.use(Vuelidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
