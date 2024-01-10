<template>
  <div>
    <h3>Counter is : {{ doubleCounter }}</h3>
    <h3>StringCounter is : {{ stringCounter }}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // props: ["counter"],
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"]),
  },
  //     {
  //     doubleCounter() {
  //       return this.$store.getters.doubleCounter;
  //     },
  //     stringCounter() {
  //       return this.$store.getters.stringCounter;
  //     },
  //   },
};
</script>
