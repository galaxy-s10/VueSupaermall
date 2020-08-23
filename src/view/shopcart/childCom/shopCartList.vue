<template>
  <div class="cart-list">
    <!-- <scroll class="content" ref="scroll"> -->
    <shop-cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></shop-cart-list-item>
    <!-- </scroll> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import shopCartListItem from "./shopCartListItem";
import Scroll from "components/comm/scroll/Scroll";

export default {
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"]) /*把cartlist展示出来*/,
  },
  components: {
    shopCartListItem,
  },
  activated() {},
};
</script>

<style scoped>
.content {
  height: calc(100% - 123px);
  overflow: hidden;
  position: relative;
  margin-top: 44px;
}
</style>