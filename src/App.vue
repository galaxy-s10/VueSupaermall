<template>
  <div>
    <keep-alive exclude="Detail">
    <!-- <keep-alive> -->
      <router-view></router-view>
    </keep-alive>

    <tab-bar v-if="isShow">
      <tab-bar-item path="/home">
        <div slot="item-icon">
          <img src="./assets/img/tabbar/home.svg" alt />
        </div>
        <div slot="item-icon-active">
          <img src="./assets/img/tabbar/home_active.svg" alt />
        </div>
        <div slot="item-text">
          <div>首页</div>
        </div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <div slot="item-icon">
          <img src="./assets/img/tabbar/category.svg" alt />
        </div>
        <div slot="item-icon-active">
          <img src="./assets/img/tabbar/category_active.svg" alt />
        </div>
        <div slot="item-text">
          <div>分类</div>
        </div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <div slot="item-icon">
          <img src="./assets/img/tabbar/shopcart.svg" alt />
        </div>
        <div slot="item-icon-active">
          <img src="./assets/img/tabbar/shopcart_active.svg" alt />
        </div>
        <div slot="item-text">
          <div>购物车</div>
        </div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <div slot="item-icon">
          <img src="./assets/img/tabbar/profile.svg" alt />
        </div>
        <div slot="item-icon-active">
          <img src="./assets/img/tabbar/profile_active.svg" alt />
        </div>
        <div slot="item-text">
          <div>我的</div>
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/comm/tabbar/TabBar";
import TabBarItem from "components/comm/tabbar/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
  created() {},
  watch: {
    $route: {
      handler(val, oldval) {
        if (this.$route.name == "detail") {
          this.isShow = false;
        } else {
          this.isShow = true;
        }
      },
    },
  },
  computed: {},
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
@import "./assets/css/normalize.css";
@import "./assets/css/base.css";  
</style>
