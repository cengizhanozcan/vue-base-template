import Vue from 'vue';

const notificationInstance = function (vmi, message) {
  vmi.$notify({
    message,
    icon: 'ti-info',
    horizontalAlign: 'right',
    verticalAlign: 'top',
    type: 'info',
    timeout: 5000,
  });
  console.log(message);
};

export default {
  install() {
    Vue.prototype.$notification = notificationInstance;
  },
};
