<template>
  <div class="row">
    <div class="clearfix"></div>
    <hr />
    <div class="form-group">
      <label>filter names</label>
      <input type="text" class="form-control" v-model="filterText" />
    </div>
    <a class="btn btn-success" v-on:click="names.push('new name')"
      >add new name</a
    >
    <br /><br />
    <ul>
      <li v-for="name in filteredNames" :key="name">{{ name }}</li>
    </ul>
    <br />
  </div>
</template>

<script>
import { NameMixin } from "../Mixins/NamesMixin.js";
export default {
  mixins: [NameMixin],
  created() {
    console.log("log in list component");
  },
};
</script>
