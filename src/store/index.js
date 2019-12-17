import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    activeTab: 'data'
  },
  mutations: {
    setActiveTab (state, payload) {
      state.activeTab = payload.value;
    }
  }
})