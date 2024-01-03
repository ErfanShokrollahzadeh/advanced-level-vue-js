<template>
  <div class="alert alert-danger">
    <h1>{{ title }}</h1>
    <a class="btn btn-warning" v-on:click="title = 'changed titel test'"
      >change title</a
    >
    <hr />
    <slot name="paragraph"></slot>
    <slot name="header"></slot>
    <hr />
    <slot name="footer">
      <h3>This is defult value for footer</h3>
    </slot>

    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "title in component 1",
    };
  },
  destroyed: function () {
    console.log("component 1 is destroyed");
  },
};
</script>
