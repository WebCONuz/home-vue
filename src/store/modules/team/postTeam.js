import axios from "@/service/axios";

const postTeam = {
  state: () => ({
    newTeam: null,
    isLoading: true,
    errorMessage: null,
  }),

  mutations: {
    POST_TEAM(state, data) {
      state.newTeam = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.message = message;
    },
  },
  actions: {
    async ADD_TEAM({ commit }, payload) {
      try {
        const token = window.localStorage.getItem("token");
        const newTeam = await axios.post(`/team`, payload, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Barear ${token}`,
          },
        });

        commit("POST_TEAM", newTeam.data.data);
        commit("SET_LOADING", false);
        return newTeam;
      } catch (err) {
        commit("SET_ERRORMESSAGE", err);
        return err;
      }
    },
  },
};

export default postTeam;
