<template>
  <div class="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="isFixed"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scrollCom"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scrollContent"
      @pullingUp="loadMore"
    >
      <my-swiper :imgs="imgs" @swiperImageLoad="swiperImageLoad" />
      <recommend :recommends="recommends" ref="test1"></recommend>
      <feature-view ref="test2"></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTopClick"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGood } from "api/home";
import NavBar from "components/comm/navbar/NavBar";
import TabControl from "components/comm/tabcontrol/TabControl";
import Recommend from "./childCom/recommend/Recommend";
import FeatureView from "./childCom/featureview/FeatureView";
import BackTop from "./childCom/backtop/BackTop";
import mySwiper from "./childCom/mySwiper/mySwiper";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "./childCom/scroll/Scroll";
export default {
  components: {
    BackTop,
    Recommend,
    FeatureView,
    NavBar,
    mySwiper,
    TabControl,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      isShowBackTop: false,
      isTabFixed: false,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      imgs: [],
      recommends: [],
      currentType: "pop",
      tabOffsetTop: 0,
      saveY: 0,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGood("pop");
    this.getHomeGood("new");
    this.getHomeGood("sell");
  },
  mounted() {
    this.$bus.$on("itemImageLoad", () => {
      if (this.$refs.scrollCom) {
        this.$refs.scrollCom.refresh1();
      }
    });
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.imgs = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGood(type) {
      const page = this.goods[type].page + 1;
      getHomeGood(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    tabClick(i) {
      switch (i) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentindex = i;
      this.$refs.tabControl2.currentindex = i;
    },
    backTopClick() {
      this.$refs.scrollCom.scrollTo(0, 0);
    },
    scrollContent(position) {
      // 显示/隐藏返回顶部
      this.isShowBackTop = -position.y > 500;
      // 当滚动距离等于tabControl2.$el.offsetTop时固定隐藏的tabControl2
      this.isTabFixed = -position.y > this.tabOffsetTop;
      // this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    loadMore() {
      console.log("加载更多");
      this.getHomeGood(this.currentType);
    },
    swiperImageLoad() {
      // 轮播图的图片加载就执行，计算出tabControl2.$el.offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  activated() {
    // console.log("activated");
    this.$refs.scrollCom.scroll.refresh();
    this.$refs.scrollCom.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    // console.log("deactivated");
    this.saveY = this.$refs.scrollCom.scroll.y;
    // console.log(this.saveY);
  },
};
</script>

<style scoped>
.isFixed {
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  z-index: 9;
}
.home {
  height: 100vh;
  position: relative;
}
.tabControl {
  position: relative;
  z-index: 9;
}
.nav-bar {
  background-color: deeppink;
  color: white;
}
.content {
  /* height: calc(100% - 89px); */
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  bottom: 49px;
}
</style>
