import Sidebar from './SideBar.vue';
import SidebarLink from './SidebarLink.vue';

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  displaySidebar(value) {
    this.showSidebar = value;
  },
};

const SidebarPlugin = {
  install(Vue) {
    const app = new Vue({
      data: {
        sidebarStore: SidebarStore,
      },
    });

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$sidebar = app.sidebarStore;
    Vue.component('side-bar', Sidebar);
    Vue.component('sidebar-link', SidebarLink);
  },
};

export default SidebarPlugin;
