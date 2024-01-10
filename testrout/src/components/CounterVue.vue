<template>
  <div>
    <a
      class="btn btn-success"
      v-on:click="asyncIncrement({ time: 50, duration: 1500 })"
      >Increase</a
    >
    <a
      class="btn btn-success"
      v-on:click="asyncDecrement({ time: 100, duration: 3000 })"
      >Decrease</a
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"]),
    // Increase() {
    //   // this.$emit("updated", +1);
    //   this.$store.state.counter++;
    // },
    // Decrease() {
    //   // this.$emit("updated", -1);
    //   this.$store.state.counter--;
    // },
  },
};
</script>
