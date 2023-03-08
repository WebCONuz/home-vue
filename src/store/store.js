import { createStore } from "vuex";
import getServices from "./modules/services/getServices";
import getTeam from "./modules/team/getTeam";
import getWorks from "./modules/works/getWorks";
import getMessages from "./modules/message/message";
import getAdmin from "./modules/admin/admin";

const store = createStore({
  modules: {
    getServices,
    getTeam,
    getWorks,
    getMessages,
    getAdmin,
  },
});

export default store;
