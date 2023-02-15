import Vue from 'vue';
import axios from 'axios';

const axiosIns = axios.create({
  baseURL: process.env.VUE_APP_API,
});

Vue.prototype.$http = axiosIns;

export default axiosIns;
