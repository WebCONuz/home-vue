import axios from "@/service/axios";

const postService = {
  state: () => ({
    newService: null,
    isLoading: true,
    errorMessage: null,
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
        const token = window.localStorage.getItem("token");
        const newService = await axios.post(`/services`, payload, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Barear ${token}`,
          },
        });

        commit("POST_SERVICE", newService.data.data);
        commit("SET_LOADING", false);
        return newService;
      } catch (err) {
        commit("SET_ERRORMESSAGE", err);
        return err;
      }
    },
  },
};

export default postService;
