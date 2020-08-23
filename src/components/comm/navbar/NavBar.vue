<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /* z-index: 2; */
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  width: 60px;
  /* background-color: red; */
}
.center {
  flex: 1;
  /* background-color: blue; */
}
</style>
