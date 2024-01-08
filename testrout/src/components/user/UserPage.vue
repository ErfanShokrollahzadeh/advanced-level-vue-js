<template>
  <div>
    <h1>The User page</h1>
    <button class="btn btn-success" v-on:click="GoToHome">Go To Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    GoToHome() {
      this.$router.push("/");
    },
  },
};
</script>
