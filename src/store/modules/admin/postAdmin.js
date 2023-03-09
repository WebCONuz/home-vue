import axios from "@/service/axios";

const postAdmin = {
  state: () => ({
    newAdmin: null,
    isLoading: true,
    errorMessage: null,
  }),

  mutations: {
    POST_ADMIN(state, data) {
      state.newAdmin = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.message = message;
    },
  },
  actions: {
    async ADD_ADMIN({ commit }, payload) {
      try {
        const token = window.localStorage.getItem("token");
        const newAdmin = await axios.post(`/admin`, payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Barear ${token}`,
          },
        });

        commit("POST_ADMIN", newAdmin.data.data);
        commit("SET_LOADING", false);
        return newAdmin;
      } catch (err) {
        commit("SET_ERRORMESSAGE", err);
        return err;
      }
    },
  },
};

export default postAdmin;
