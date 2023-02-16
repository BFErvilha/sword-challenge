import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import firebase from 'firebase/app';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/scss/style.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const firebaseConfig = {
  apiKey: 'AIzaSyB0yDVyQM1cyeXshNiStad6RLlTQsA40eM',
  authDomain: 'sword-challenge-f0f87.firebaseapp.com',
  projectId: 'sword-challenge-f0f87',
  storageBucket: 'sword-challenge-f0f87.appspot.com',
  messagingSenderId: '685494484613',
  appId: '1:685494484613:web:9bec8d5ca4fb43d8e933ec',
};

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log('user', user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
