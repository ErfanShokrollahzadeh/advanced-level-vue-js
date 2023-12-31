<template>
  <div>
    <p>current UserName is : {{ UserName }}</p>
    <a class="btn btn-success" v-on:click="ChangeUserName">ChangeUserName</a>
    <p>parent user.name is {{ User.name }}</p>
    <p>user age in parent is : {{ Age }}</p>
    <hr />
    <user-first-child
      :user="User"
      :changeNameFn="changeNameInParent"
      :name="UserName"
      @changeName="ChangeNmaeByChild"
      :userAge="Age"
    ></user-first-child>

    <user-second-child
      :userAge="Age"
      :ChangeAge="ChangeAgeInParent"
    ></user-second-child>
  </div>
</template>

<script>
import UserFirstChild from "./UserfirstChild.vue";
import UserSecondChild from "./UserSecondchild.vue";
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
    ChangeUserName: function () {
      this.UserName = "Ali";
    },
    ChangeNmaeByChild: function (event) {
      this.UserName = event;
    },
    changeNameInParent: function () {
      this.UserName = "Changed in parent component";
    },
    ChangeAgeInParent: function () {
      this.Age = 30;
    },
  },
};
</script>

<style scoped>
p {
  color: black;
}
</style>
