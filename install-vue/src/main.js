import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import AppTitle from "./AppTitle.vue";
import AppFooter from "./components/AppFooter.vue";

Vue.use(VueResource);

Vue.http.options.root =
  "https://resource-vue-5873d-default-rtdb.firebaseio.com/";

Vue.http.interceptors.push((request, next) => {
  request.headers.set("Authentication", "this is for auth");
  console.log(request);
  // if (request.method == "POST") {
  //   request.method = "PUT";
  // }
  next((response) => {
    response.json = () => {
      return { message: response.body };
    };
  });
});

Vue.mixin({
  created() {
    console.log("log in main.js -global");
  },
});

Vue.filter("tolower", function (value) {
  return value.toLowerCase();
});

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
