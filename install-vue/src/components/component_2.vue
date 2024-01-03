<template>
  <div class="alert alert-success">
    <h1>this is Component 2</h1>
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
  activated: function () {
    console.log("component 2 is activated");
  },
  deactivated: function () {
    console.log("component 2 is deactivated");
  },
};
</script>
