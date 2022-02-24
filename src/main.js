import { createApp } from "vue";

import axios from "axios";
import { router } from "@/routes";
import { VueQueryPlugin } from "vue-query";

//UI framework
import naive from "naive-ui";

//Tippy Tooltips
import VueTippy from "vue-tippy";

import App from "./App.vue";

//Tailwind CSS
import "./index.scss";

//Pinia
import { createPinia } from "pinia";

//Custom Directives
import mask from "@/directives/mask";
import ObserveVisibility from "@/directives/observe-visibility";

axios.defaults.baseURL = "https://gmtvinventory.com/api";

const vueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
};

createApp(App)
  .use(router)
  .use(naive)
  .directive("mask", mask)
  .directive("observe-visibility", ObserveVisibility)
  .use(createPinia())
  .use(VueTippy)
  .use(VueQueryPlugin, vueQueryPluginOptions)
  .mount("#app");
