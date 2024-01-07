<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="UserName">User Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter name"
            v-model="User.name"
          />
        </div>
        <div class="form-group">
          <label for="UserEmail">User Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            v-model="User.email"
          />
        </div>
        <button type="submit" class="btn btn-success" v-on:click="submitForm">
          send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "app",
  data() {
    return {
      User: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$http
        .post(
          "https://resource-vue-5873d-default-rtdb.firebaseio.com/User.json",
          this.User
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
