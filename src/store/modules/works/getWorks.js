import axios from "@/service/axios";

const getWorks = {
  state: {
    works: [],
    isLoading: true,
    errorMessage: "",
  },
  mutations: {
    GET_WORKS(state, data) {
      state.works = data;
    },
    GET_LOADING(state, status) {
      state.isLoading = status;
    },
    GET_ERRORMESSAGE(state, message) {
      state.errorMessage = message;
    },
  },
  actions: {
    async fetchWorks({ commit }) {
      try {
        const works = await axios.get("/works");
        commit("GET_WORKS", works.data.data);
        commit("GET_LOADING", false);
      } catch (err) {
        commit("GET_ERRORMESSAGE", err);
      }
    },
  },
};

export default getWorks;
