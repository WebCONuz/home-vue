import axios from "@/service/axios";

const postWork = {
  state: () => ({
    newWork: null,
    isLoading: true,
    errorMessage: null,
  }),

  mutations: {
    POST_WORK(state, data) {
      state.newWork = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.message = message;
    },
  },
  actions: {
    async ADD_WORK({ commit }, payload) {
      try {
        const token = window.localStorage.getItem("token");
        const newWork = await axios.post(`/works`, payload, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Barear ${token}`,
          },
        });

        commit("POST_WORK", newWork.data.data);
        commit("SET_LOADING", false);
        return newWork;
      } catch (err) {
        commit("SET_ERRORMESSAGE", err);
        return err;
      }
    },
  },
};

export default postWork;
