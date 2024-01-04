import Vue from "vue";
import App from "./App.vue";
import AppTitle from "./AppTitle.vue";
import AppFooter from "./components/AppFooter.vue";

Vue.directive("custom", {
  bind(el, binding, vnode) {
    var delay = 0;

    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }

    setInterval(() => {
      if (binding.arg === "textcolor") {
        el.style.color = binding.value;
      }
    }, delay);

    el.style.fontSize = "1.5em";
    el.style.padding = "20px";
    el.style.backgroundColor = "gray";
  },
});

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

// Vue.directive("custom", {
//   bind(el, binding, vnode) {},
//   inserted(el, binding, vnode) {},
//   update(el, binding, vnode, oldVnode) {},
//   componentUpdated(el, binding, vnode, oldVnode) {},
//   unbind(el, binding, vnode) {},
// });
