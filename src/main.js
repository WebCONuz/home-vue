import { createApp } from "vue";
import AOS from "aos";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";

import "vue3-toastify/dist/index.css";
import "./assets/main.css";
import "aos/dist/aos.css";

AOS.init();

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
