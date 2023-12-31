<template>
  <div class="col-md-6">
    <div class="border-child">
      <p>this is the first child</p>
      <p>parent user name is : {{ name }}</p>
      <p>parent user reverse name is : {{ reverseName() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  proms: ["name"],
  props: {
    name: {
      type: String,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    reverseName: function () {
      return this.name.split("").reverse().join("");
    },
  },
};
</script>

<style scoped>
.border-child {
  border: 2px solid blue;
  border-radius: 5px;
  padding: 10px;
  height: 150px;
  background-color: orange;
  color: black;
}
</style>
