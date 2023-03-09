import { createStore } from "vuex";
import getServices from "./modules/services/getServices";
import postService from "./modules/services/postService";

import getTeam from "./modules/team/getTeam";
import postTeam from "./modules/team/postTeam";

import getWorks from "./modules/works/getWorks";
import postWork from "./modules/works/postWork";

import getMessages from "./modules/message/message";

import getAdmin from "./modules/admin/getAdmin";
import postAdmin from "./modules/admin/postAdmin";
import authAdmin from "./modules/admin/authAdmin";

const store = createStore({
  modules: {
    getServices,
    postService,

    getTeam,
    postTeam,

    getWorks,
    postWork,

    getMessages,

    getAdmin,
    postAdmin,
    authAdmin,
  },
});

export default store;
