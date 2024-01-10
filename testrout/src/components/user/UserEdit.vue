<template>
  <div>
    <h3>Edit the User Page</h3>
    <hr />
    <p class="alert alert-success">Loaded Id is : {{ loadedId }}</p>
    <hr />
    <div class="MyDiv"></div>
    <router-link to="/404" class="btn btn-danger" id="link">404</router-link>
    <div class="MyDiv"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadedId: this.$route.params.id,
      IsConfirmed: false,
    };
  },
  watch: {
    $route(to) {
      this.loadedId = to.params.id;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    this.IsConfirmed = confirm(" Are you sure ?");
    if (this.IsConfirmed) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style>
.MyDiv {
  height: 900px;
  background-color: rgb(137, 198, 251);
  animation: mymove 5s infinite;
}
</style>
