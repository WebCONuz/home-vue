import axios from "@/service/axios";

const getAdmin = {
  state: {
    admins: [],
    isLoading: true,
    errorMessage: "",
  },
  mutations: {
    GET_ADMINS(state, data) {
      state.admins = data;
    },
    GET_LOADING(state, status) {
      state.isLoading = status;
    },
    GET_ERRORMESSAGE(state, message) {
      state.errorMessage = message;
    },
  },
  actions: {
    async fetchAdmins({ commit }) {
      try {
        const admins = await axios.get("/admin");
        commit("GET_ADMINS", admins.data.data);
        commit("GET_LOADING", false);
      } catch (err) {
        commit("GET_ERRORMESSAGE", err);
      }
    },
  },
};

export default getAdmin;
