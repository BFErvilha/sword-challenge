import Vue from 'vue';
import axios from 'axios';

const axiosIns = axios.create({
  baseURL: process.env.VUE_APP_API,
});

// axiosIns.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')

//   config.headers.Authorization = `Bearer ${token}`
//   if (config.data instanceof FormData) {
//     config.headers['Accept'] = '*/*'
//   }
//   return config
// })

Vue.prototype.$http = axiosIns;

export default axiosIns;
