import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    refreshToken: '',
    bookmarks: [],
  },
  getters: {
    bookmarks: (state) => {
      return state.bookmarks;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken;
    },
    addBookmark(state, item) {
      state.bookmarks.push(item);
    },
    removeBookmark(state, item) {
      state.bookmarks.splice(item, 1);
    },
  },
  actions: {},
  modules: {},
});
