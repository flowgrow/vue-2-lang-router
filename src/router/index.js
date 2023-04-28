import Vue from "vue";
import LangRouter from "vue-lang-router";
import translations from "../lang/translations";
import localizedURLs from "../lang/localized-urls";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Pet from "../views/Pet.vue";

Vue.use(LangRouter, {
  defaultLanguage: "en",
  translations,
  localizedURLs
});

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "Plugin info",
    component: About
  },
  {
    path: "/pet/:animal/:name",
    name: "Pet",
    component: {
      template: "<router-view/>"
    },
    children: [
      {
        path: "info",
        name: "Pet details",
        component: Pet
      }
    ]
  }
];

// Initiate router
const router = new LangRouter({
  routes,
  mode: "history"
});

export default router;
