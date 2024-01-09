<!-- <template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Routing</h1>
        <app-header></app-header>
        <hr />
        <transition enter-active-class="animate__animated animate__fadeIn">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Routing</h1>
        <app-header></app-header>
        <hr />
        <router-view v-slot="{ Component }">
          <transition enter-active-class="animate__animated animate__fadeIn">
            <component :is="Component" />
          </transition>
        </router-view>
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
