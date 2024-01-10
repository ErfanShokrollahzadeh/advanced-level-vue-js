<template>
  <div>
    <a class="btn btn-success" v-on:click="Increase">Increase</a>
    <a class="btn btn-success" v-on:click="Decrease">Decrease</a>
  </div>
</template>

<script>
export default {
  methods: {
    Increase() {
      // this.$emit("updated", +1);
      this.$store.state.counter++;
    },
    Decrease() {
      // this.$emit("updated", -1);
      this.$store.state.counter--;
    },
  },
};
</script>
