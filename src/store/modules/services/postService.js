import axios from "@/service/axios";

const postService = {
  state: () => ({
    newService: null,
    isLoading: true,
    errorMessage: "",
  }),

  mutations: {
    POST_SERVICE(state, data) {
      state.newService = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.message = message;
    },
  },
  actions: {
    async ADD_SERVICE({ commit }, payload) {
      try {
        console.log("Store:", payload);
        const newService = await axios.post(`/services`, payload, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        commit("POST_SERVICE", newService.data.data);
        commit("SET_LOADING", false);
      } catch (err) {
        console.log(err.response.data.message);
        commit("SET_ERRORMESSAGE", err.response.data.message);
      }
    },
  },
};

export default postService;
