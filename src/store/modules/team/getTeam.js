import axios from "@/service/axios";

const getTeam = {
  state: {
    team: [],
    isLoading: true,
    errorMessage: "",
  },
  mutations: {
    GET_TEAM(state, data) {
      state.team = data;
    },
    GET_LOADING(state, status) {
      state.isLoading = status;
    },
    GET_ERRORMESSAGE(state, message) {
      state.errorMessage = message;
    },
  },
  actions: {
    async fetchTeam({ commit }) {
      try {
        const team = await axios.get("/team");
        commit("GET_TEAM", team.data.data);
        commit("GET_LOADING", false);
      } catch (err) {
        commit("GET_ERRORMESSAGE", err);
      }
    },
  },
};

export default getTeam;
