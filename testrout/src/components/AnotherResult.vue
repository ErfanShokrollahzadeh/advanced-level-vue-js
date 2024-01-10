<template>
  <div>
    <h3>Counter is : {{ counter }}</h3>
  </div>
</template>

<script>
export default {
  // props: ["counter"],
  computed: {
    counter() {
      return this.$store.getters.doubleCounter;
    },
  },
};
</script>
