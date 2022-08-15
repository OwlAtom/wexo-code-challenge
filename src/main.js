import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
const app = createApp(App);

import router from "./router";
app.use(router);

import { createPinia } from "pinia";
const pinia = createPinia();

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
pinia.use(piniaPluginPersistedstate);

app.use(pinia);

app.mount("#app");
