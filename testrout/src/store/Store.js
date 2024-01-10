// import Vue from "vue";
// import Vuex from "vuex";
import { createStore } from "vuex";

export const store = createStore({
  state: {
    counter: 0,
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
    stringCounter(state) {
      return state.counter + "clicks";
    },
  },
  mutations: {
    increment(state, time) {
      return (state.counter += time);
    },
    decrement(state, time) {
      return (state.counter -= time);
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
  },
});
