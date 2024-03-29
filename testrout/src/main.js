import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./Routes.js";
import { store } from "./store/Store.js";
import App from "./App.vue";
// import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

// Create a router instance
const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
  scrollBehavior(to, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  console.log("Global beforeEach");
  console.log(to, from);
  next();
});

// Create the Vue app instance and use the router and store
const app = createApp(App);
app.use(router);
app.use(store);

// Mount the app
app.mount("#app");

// new Vue({
//   render: (h) => h(App),
//   store, // Pass the store to the Vue instance
// }).$mount("#app");
