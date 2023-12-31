<template>
  <div class="col-md-6">
    <div class="border-child">
      <p>user age in parent is : {{ userAge }}</p>
      <a class="btn btn-success" v-on:click="ChangeAge">Change Age</a>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  props: {
    userAge: Number,
    ChangeAge: Function,
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
