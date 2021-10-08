import { createApp } from "vue";
import App from "./ShopApp.vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import router from "./router/index.js";

//import store from "./store/index.js";
import store from "./store/index";

// createApp(App).mount("#app");

const myApp = createApp(App);
myApp.use(router);
myApp.use(store);
myApp.mount("#app");
