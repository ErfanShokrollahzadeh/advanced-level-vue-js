<template>
  <div>
    <p>Please select a User</p>
    <hr />
    <ul class="list-group">
      <router-link
        to="/User/detail/1"
        class="list-group-item"
        style="cursor: pointer"
        ><a>User 1</a></router-link
      >
      <router-link
        to="/User/detail/2"
        class="list-group-item"
        style="cursor: pointer"
        ><a>User 2</a></router-link
      >
      <router-link
        to="/User/detail/3"
        class="list-group-item"
        style="cursor: pointer"
        ><a>User 3</a></router-link
      >

      <!-- <li class="list-group-item" style="cursor: pointer">User 1</li>
      <li class="list-group-item" style="cursor: pointer">User 2</li>
      <li class="list-group-item" style="cursor: pointer">User 3</li> -->
    </ul>
  </div>
</template>
