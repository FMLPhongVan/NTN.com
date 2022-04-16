<template>
  <tool-bar></tool-bar>
  <section class="background-image-section">
    <img class="background-image" src="../assets/logo.png" alt="" />
  </section>
</template>

<script>
import ToolBar from "../components/ToolBar.vue";

export default {
  component: {
    'tool-bar': ToolBar,
  },
};
</script>

<style>
.background-image-section {
  text-align: left;
  display: block;
  float: left;
  width: 100%;
  height: 50vh;
  position: relative;
}

.background-image {
  box-sizing: border-box;
  float: left;
  width: 100%;
  height: 100%;
}
</style>
