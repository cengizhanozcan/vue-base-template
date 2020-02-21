import SideBar from '../components/themes/SidebarPlugin';
import GlobalComponents from './globalComponents';
import GlobalDirectives from './globalDirectives';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'es6-promise/auto';

// css assets
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/sass/paper-dashboard.scss';
import '../assets/css/themify-icons.css';

export default {
  install(Vue) {
    Vue.use(GlobalComponents);
    Vue.use(GlobalDirectives);
    Vue.use(SideBar);
  },
};
