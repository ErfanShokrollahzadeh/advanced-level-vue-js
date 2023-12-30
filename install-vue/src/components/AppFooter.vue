<template>
  <footer>
    <div class="footer-blurb">
      <div class="container">
        <div class="row">

          <footer-item></footer-item>
          
        </div>
      </div>
    </div>

    <div class="small-print">
      <div class="container">
        <p>
          <a href="#">Terms &amp; Conditions</a> |
          <a href="#">Privacy Policy</a> |
          <a href="#">Contact</a>
        </p>
        <p>Copyright &copy; Example.com 2015</p>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterItems from "./footeritems.vue";
export default {
  components: {
    "footer-item": FooterItems,
  },
};
</script>
