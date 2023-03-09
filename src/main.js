import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";

import "vue3-toastify/dist/index.css";
import "./assets/main.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
