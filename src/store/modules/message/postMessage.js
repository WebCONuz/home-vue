import axios from "@/service/axios";

const postMessage = {
  state: () => ({
    newMsg: null,
    isLoading: true,
    errorMessage: null,
  }),

  mutations: {
    POST_MESSAGE(state, data) {
      state.newMsg = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.message = message;
    },
  },
  actions: {
    async ADD_MESSAGE({ commit }, payload) {
      try {
        const newMsg = await axios.post(`/message`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        commit("POST_MESSAGE", newMsg.data.data);
        commit("SET_LOADING", false);
        return newMsg;
      } catch (err) {
        commit("SET_ERRORMESSAGE", err);
        return err;
      }
    },
  },
};

export default postMessage;
