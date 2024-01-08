<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link to="/" class="nav-link active">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/User" class="nav-link">User</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/UserEdit/1" class="nav-link">UserEdit 1</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/UserEdit/2" class="nav-link">UserEdit 2</router-link>
      </li>
    </ul>

    <!-- <ul class="nav nav-pills">
      <router-link tag="li" active-class="active" to="/" exact>
        <a>Home</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/User">
        <a>User</a>
      </router-link>
    </ul> -->
  </div>
</template>
