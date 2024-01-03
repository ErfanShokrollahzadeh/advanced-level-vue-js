<template>
  <div>
    <p>current age in parent is : {{ Age }}</p>
    <user-first-child :_age="Age"></user-first-child>
    <user-second-child :_age="Age" @changeAge="changeAge"></user-second-child>
  </div>
</template>

<script>
import UserFirstChild from "./userfirstChild.vue";
import UserSecondChild from "./userSecondchild.vue";
export default {
  data: function () {
    return {
      UserName: "Erfan",
      User: {
        name: "Erfan",
        family: "shokri",
      },
      Age: 22,
    };
  },
  components: {
    "user-first-child": UserFirstChild,
    "user-second-child": UserSecondChild,
  },
  methods: {
    changeAge: function (age) {
      this.Age = age;
    },
  },
};
</script>

<style scoped>
p {
  color: black;
}
</style>
