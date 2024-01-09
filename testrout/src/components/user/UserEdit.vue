<template>
  <div>
    <h3>Edit the User Page</h3>
    <hr />
    <p class="alert alert-success">Loaded Id is : {{ loadedId }}</p>
    <hr />
    <router-link to="/404" class="btn btn-danger">404</router-link>
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
