import { createStore } from "vuex";
import getServices from "./modules/services/getServices";
import postService from "./modules/services/postService";

import getTeam from "./modules/team/getTeam";
import getWorks from "./modules/works/getWorks";
import getMessages from "./modules/message/message";

import getAdmin from "./modules/admin/admin";
import authAdmin from "./modules/admin/authAdmin";

const store = createStore({
  modules: {
    getServices,
    postService,
    getTeam,
    getWorks,
    getMessages,
    getAdmin,
    authAdmin,
  },
});

export default store;
