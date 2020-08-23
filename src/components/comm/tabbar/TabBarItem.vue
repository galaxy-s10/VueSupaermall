<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}" :style="activeStyle" class="text">
      <slot name="item-text">{{isActive}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "deeppink",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      if (this.path != this.$route.path) {
        this.$router.push({ path: this.path });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.active {
  color: deepskyblue;
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  box-sizing: border-box;
  // border: 1px solid red;
  height: 50px;
  font-size: 14px;
  img {
    width: 25px;
    height: 25px;
    margin-top: 3px;
    vertical-align: middle;
  }
}
.text{
  height: 22px;
  line-height: 22px;
  font-size: 12px;
}
</style>
