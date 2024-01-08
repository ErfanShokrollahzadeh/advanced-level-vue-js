<template>
  <div>
    <h3>Edit the User Page</h3>
    <hr />
    <p class="alert alert-success">{{ loadedId }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadedId: this.$route.params.id,
    };
  },
  watch: {
    $route(to) {
      this.loadedId = to.params.id;
    },
  },
};
</script>
