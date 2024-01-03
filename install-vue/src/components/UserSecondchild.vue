<template>
  <div class="col-md-6">
    <div class="border-child">
      <p>Age from parent is : {{ Age }}</p>
      <a class="btn btn-success" v-on:click="CnageName">Cnage Age</a>
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
  methods: {
    CnageName: function () {
      this.Age = BusEvent.PuplicAge;
      //this.$emit("changeAge", this.Age);
      // BusEvent.$emit("changeAge", this.Age);
      BusEvent.ChangeAge(BusEvent.PuplicAge);
    },
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
