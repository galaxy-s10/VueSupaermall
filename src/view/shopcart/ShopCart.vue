<template>
  <div>
    <nav-bar class="nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <Scroll class="content" ref="scrollCom" :probeType="3" :pullUpLoad="true">
      <shopCartList></shopCartList>
    </Scroll>
    <shopCartBottom></shopCartBottom>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "components/comm/navbar/NavBar";
import shopCartList from "./childCom/shopCartList";
import shopCartBottom from "./childCom/shopCartBottom";
import Scroll from "components/comm/scroll/Scroll";
export default {
  components: {
    NavBar,
    shopCartList,
    shopCartBottom,
    Scroll,
  },
  data() {
    return {};
  },
  activated() {
    this.$refs.scrollCom.scroll.refresh();
  },
  computed: {},
};
</script>

<style scoped>
.content {
  margin-top: 40px;
  height: calc(100vh - 120px);
}
.nav {
  background-color: deeppink;
  color: white;
  font-weight: 500;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
}
</style>
