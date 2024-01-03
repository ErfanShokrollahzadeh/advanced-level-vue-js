<template>
  <div class="col-md-6">
    <div class="border-child">
      <p>Age from parent is : {{ Age }}</p>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { BusEvent } from "../main.js";
export default {
  props: {
    _age: Number,
  },
  data: function () {
    return {
      Age: this._age,
    };
  },
  created: function () {
    BusEvent.$on("changeAge", (age) => {
      this.Age = age;
    });
  },
};
</script>

<style scoped>
.border-child {
  border: 2px solid blue;
  border-radius: 5px;
  padding: 10px;
  background-color: orange;
  color: black;
}
</style>
