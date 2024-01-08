<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Routing</h1>
        <app-header></app-header>
        <hr />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSite from "./components/HeaderSite.vue";
export default {
  components: {
    "app-header": HeaderSite,
  },
};
</script>
