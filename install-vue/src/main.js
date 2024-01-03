import Vue from "vue";
import App from "./App.vue";
import AppTitle from "./AppTitle.vue";
import AppFooter from "./components/AppFooter.vue";

Vue.component("app-footer", AppFooter);

export const BusEvent = new Vue({
  data: function () {
    return {
      PuplicAge: 45,
    };
  },
  methods: {
    ChangeAge(age) {
      this.$emit("changeAge", age);
    },
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
