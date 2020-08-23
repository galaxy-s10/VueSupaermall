<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@color: #f6f6f6;
#tab-bar {
  background-color: @color;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
