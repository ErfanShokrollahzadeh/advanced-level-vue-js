<template>
  <div class="container">
    <h1>Vuex</h1>
    <hr />
    <app-result></app-result>
    <hr />
    <h3>another reult</h3>
    <app-another-result></app-another-result>
    <hr />
    <app-counter></app-counter>
  </div>
</template>

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
<!-- <template>
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
</template> -->

<script>
import CounterVue from "./components/CounterVue.vue";
import ResultVue from "./components/ResultVue.vue";
import AnotherResult from "./components/AnotherResult.vue";
// import HeaderSite from "./components/HeaderSite.vue";
export default {
  components: {
    // "app-header": HeaderSite,
    "app-counter": CounterVue,
    "app-result": ResultVue,
    "app-another-result": AnotherResult,
  },
};
</script>
