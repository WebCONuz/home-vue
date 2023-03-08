import axios from "@/service/axios";

const authAdmin = {
  state: () => ({
    isAuth: false,
    authMessage: "",
    token: "",
  }),

  mutations: {
    SET_AUTH(state, status) {
      state.isAuth = status;
    },
    SET_MESSAGE(state, payload) {
      state.authMessage = payload;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      window.localStorage.setItem("token", state.token);
    },
  },

  actions: {
    async LOGIN_ADMIN({ commit }, payload) {
      try {
        const response = await axios.post("/admin/login", payload);
        commit("SET_AUTH", true);
        commit("SET_TOKEN", response.data.token);
        commit("SET_MESSAGE", "Hammasi yaxshi");
      } catch (err) {
        commit("SET_MESSAGE", err.response.data.message);
        commit("SET_TOKEN", "");
        commit("SET_AUTH", false);
      }
    },
  },
};

export default authAdmin;
