import axios from "@/service/axios";

const getServices = {
  state: {
    services: [],
    isLoading: true,
    errorMessage: "",
  },
  mutations: {
    GET_SERVICES(state, data) {
      state.services = data;
    },
    GET_LOADING(state, status) {
      state.isLoading = status;
    },
    GET_ERRORMESSAGE(state, message) {
      state.errorMessage = message;
    },
  },
  actions: {
    async fetchServices({ commit, state }) {
      try {
        const services = await axios.get("/services");
        commit("GET_SERVICES", services.data.data);
        commit("GET_LOADING", false);
      } catch (err) {
        commit("GET_ERRORMESSAGE", err);
      }
    },
  },
};

export default getServices;
