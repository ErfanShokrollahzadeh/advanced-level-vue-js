<template>
  <div>
    <h1>The User page</h1>
    <button class="btn btn-success" v-on:click="GoToHome">Go To Home</button>
    <hr />
    <router-view v-slot="{ Component }">
      <transition enter-active-class="animate__animated animate__fadeIn">
        <component :is="Component" />
      </transition>
    </router-view>
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
