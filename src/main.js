import { createApp } from "vue";
import AOS from "aos";
import { createI18n } from "vue-i18n";
import { languages } from "./languages/index";
import { langLocaleDefault } from "./languages/index";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";

import "vue3-toastify/dist/index.css";
import "./assets/main.css";
import "aos/dist/aos.css";

// AOS library
AOS.init();

// Locale languages
const messages = Object.assign(languages);
const langLocalStorage = localStorage.getItem("lang");
const i18n = createI18n({
  legacy: false,
  locale: langLocalStorage || langLocaleDefault,
  fallbackLocale: "uz",
  messages,
});

// Create App
const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.mount("#app");
