import Vue from "vue";
import App from "./App.vue";
import AppTitle from "./AppTitle.vue";
import AppFooter from "./components/AppFooter.vue";

Vue.component("app-footer", AppFooter);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
