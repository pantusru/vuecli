import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    checkPop: {
      NavTop: false,
      NavAll: false
    },
    productPopular: 0
  },
  mutations: {
    setProductPopular: (state, data) => {
      state.productPopular = data;
    }
  },
  getters: {
    getProductPopular: state => {
      return state.productPopular;
    },
    getcheckNavTopPop: state => {
      return state.checkNavTopPop;
    }
  },
  actions: {},
  modules: {}
});
