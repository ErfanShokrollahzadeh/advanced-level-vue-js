<template>
  <div>
    <a class="btn btn-success" v-on:click="increment(10)">Increase</a>
    <a class="btn btn-success" v-on:click="decrement(5)">Decrease</a>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increment", "decrement"]),
    // ...mapMutations(["increment", "decrement"]),
    // Increase() {
    //   this.$store.commit("increment");
    // },
    // Decrease() {
    //   this.$store.commit("decrement");
    // },
  },
};
</script>
