// store.js
import { createStore } from "vuex";
// import counter from "./modules/counter.js";

export const store = createStore({
  state: {
    counter: 0,
    name: "erfan",
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
    stringCounter(state) {
      return state.counter + "clicks";
    },
    getName(state) {
      return state.name;
    },
  },
  mutations: {
    increment(state, time) {
      return (state.counter += time);
    },
    decrement(state, time) {
      return (state.counter -= time);
    },
    chnageName(state, newname) {
      state.name = newname;
    },
  },
  actions: {
    increment(context, time) {
      context.commit("increment", time);
    },
    decrement(context, time) {
      context.commit("decrement", time);
    },
    asyncIncrement(context, data) {
      setTimeout(() => {
        context.commit("increment", data.time);
      }, data.duration);
    },
    asyncDecrement(context, data) {
      setTimeout(() => {
        context.commit("decrement", data.time);
      }, data.duration);
    },
    chnageName(context, newname) {
      context.commit("chnageName", newname);
    },
  },
});
