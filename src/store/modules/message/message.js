import axios from "@/service/axios";

const getMessages = {
  state: {
    messages: [],
    isLoading: true,
    errorMessage: "",
  },
  mutations: {
    GET_MESSAGES(state, data) {
      state.messages = data;
    },
    GET_LOADING(state, status) {
      state.isLoading = status;
    },
    GET_ERRORMESSAGE(state, message) {
      state.errorMessage = message;
    },
  },
  actions: {
    async fetchMessages({ commit }) {
      try {
        const messages = await axios.get("/message");
        commit("GET_MESSAGES", messages.data.data);
        commit("GET_LOADING", false);
      } catch (err) {
        commit("GET_ERRORMESSAGE", err);
      }
    },
  },
};

export default getMessages;
