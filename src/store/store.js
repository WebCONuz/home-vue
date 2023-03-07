import { createStore } from "vuex";
import getServices from "@/modules/services/getServices";

const store = createStore({
  modules: {
    getServices,
  },
});

export default store;
