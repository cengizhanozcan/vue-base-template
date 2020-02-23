import Vue from 'vue';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8090/api/v1',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      throw new Error(error.message);
    }
    throw new Error(error.response.data.error.message);
  },
);

export default {
  install() {
    Vue.prototype.$axios = axiosInstance;
  },
};
