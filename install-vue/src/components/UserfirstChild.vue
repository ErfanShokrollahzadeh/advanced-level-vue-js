<template>
  <div class="col-md-6">
    <div class="border-child">
      <p>this is the first child</p>
      <p>parent user name is : {{ name }}</p>
      <!-- <p>parent user reverse name is : {{ reverseName() }}</p> -->
      <p>user.name is {{ user.name }}</p>
      <a class="btn btn-success" v-on:click="changeUserName"
        >change user.name</a
      >
      <hr />
      <a class="btn btn-success" v-on:click="changeName">change name</a>
      <a class="btn btn-success" v-on:click="changeNameFn"
        >change name by function in parent</a
      >
      <hr />
      <p>user age in parent is : {{ userAge }}</p>
    </div>
    <div class="clearfix"></div>
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
    changeNameFn: {
      type: Function,
    },
    user: Object,
    userAge: Number,
  },
  methods: {
    reverseName: function () {
      return this.name.split("").reverse().join("");
    },
    changeName: function () {
      this.gotname = "Changed by function in child";
      this.$emit("changeName", this.gotname);
    },
    changeUserName: function () {
      this.user.name = "Changed by function in child";
    },
  },
  data: function () {
    return {
      gotname: this.name,
    };
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
