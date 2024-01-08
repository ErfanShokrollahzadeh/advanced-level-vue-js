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
    <hr />
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-success" v-on:click="Getusers">Get users</button>
        <br /><br />
        <ul class="list-group">
          <li class="list-group-item" v-for="user in Users" :key="user.email">
            {{ user.UserName }}
          </li>
        </ul>
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
      Users: [],
      resource: {},
    };
  },
  methods: {
    submitForm() {
      // this.$http
      //   .post("", this.User)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // this.resource.save({}, this.User);
      this.resource.SaveUser(this.User);
    },
    Getusers() {
      this.$http
        .get("User.json") // url in the main.js
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.Users = resultArray;
        });
    },
  },
  created() {
    const customAction = {
      SaveUser: { url: "User.json", method: "POST" },
      EditUser: { url: "User.json", method: "PUT" },
    };

    this.resource = this.$resource("User.json", {}, customAction);
  },
};
</script>

<style scoped></style>
