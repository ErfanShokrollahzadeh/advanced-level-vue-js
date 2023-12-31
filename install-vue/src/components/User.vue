<template>
  <div>
    <p>current UserName is : {{ UserName }}</p>
    <a class="btn btn-success" v-on:click="ChangeUserName">ChangeUserName</a>
    <hr />
    <user-first-child :name="UserName"></user-first-child>
  </div>
</template>

<script>
import UserFirstChild from "./UserfirstChild.vue";
export default {
  data: function () {
    return {
      UserName: "Erfan",
    };
  },
  components: {
    "user-first-child": UserFirstChild,
  },
  methods: {
    ChangeUserName: function () {
      this.UserName = "Ali";
    },
  },
};
</script>

<style scoped>
p {
  color: black;
}
</style>
