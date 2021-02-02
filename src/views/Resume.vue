<template>
  <div>
    <Nav />
    <img src="../assets/Resume_2.svg" alt="" srcset="" />
    <div class="tooltip">
      To Download :<br />
      Desktop: Right Click and click "Save image as.." <br />Mobile: Hold screen and click
      "Save image as.."
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  components: { Nav },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.tooltip {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 13px;
  background: black;
  color: white;
  border-radius: 10px;
  font-size: 11px;
}
</style>
