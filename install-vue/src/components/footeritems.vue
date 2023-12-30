<template>
  <div>
    <div class="col-sm-4 footer-blurb-item test" v-for="item in 3" :key="item">
      <img
        class="img-circle"
        src="holder.js/100x100"
        alt
        width="100"
        height="100"
      />
      <h3>Dynamically Procrastinate</h3>
      <p>
        Collaboratively administrate empowered markets via plug-and-play
        networks. Dynamically procrastinate B2C users after installed base
        benefits. Dramatically visualize customer directed convergence without
        revolutionary ROI.
      </p>
      <p>
        <a class="btn btn-default" href="#">Procrastinate</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.test {
  border: 2px solid black;
}
</style>
