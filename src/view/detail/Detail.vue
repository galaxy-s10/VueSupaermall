<template>
  <div style="height:100vh">
    <detailNav @handleClick="handleClick" ref="detailNav"></detailNav>
    <scroll
      @scroll="scrollContent"
      class="content1"
      ref="scrollCom"
      :probeType="3"
      :pullUpLoad="true"
    >
      <swiper :topImages="topImages"></swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop-info="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params-info :shop-param-info="shopParamsInfo" ref="param"></detail-params-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <div class="for-you">为您推荐</div>
      <goods-list :goods="commendInfo" class="recommends" ref="goods"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import {
  getDetailData,
  getCommend,
  goods,
  shop,
  shopParamsInfo,
  goodsParams,
} from "api/detail";
import detailBaseInfo from "./childCom/detailBaseInfo";
import detailShopInfo from "./childCom/detailShopInfo";
import detailGoodsInfo from "./childCom/detailGoodsInfo";
import detailParamsInfo from "./childCom/detailParamsInfo";
import detailCommentInfo from "./childCom/detailCommentInfo";
import detailBottomBar from "./childCom/detailBottomBar";
import detailNav from "./childCom/detailNav";
import swiper from "./childCom/swiper";
import goodsList from "components/content/goods/GoodsList";
import scroll from "components/comm/scroll/Scroll";

export default {
  name: "Detail",
  components: {
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamsInfo,
    detailCommentInfo,
    goodsList,
    detailBottomBar,
    detailNav,
    swiper,
    scroll,
  },
  data() {
    return {
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      shopParamsInfo: {},
      commentInfo: {},
      commendInfo: [],
      themeTopYs: [],
      currentIndex: 0,
      isClick: false,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    console.log(this.$route);
    getDetailData(this.iid).then((res) => {
      var data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 获取shopInfo
      this.shop = new shop(data.shopInfo);
      // 保存商品详情数据
      this.detailInfo = data.detailInfo;
      // 保存商品评论
      this.shopParamsInfo = new goodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 保存商品评论信息
      if (data.rate.cRate !== 0) this.commentInfo = data.rate.list[0];
    });
    // 保存推荐信息
    getCommend().then((res) => {
      this.commendInfo = res.data.list;
    });
  },
  mounted() {
    this.$bus.$on("detailLoad", () => {
      if (this.$refs.scrollCom) {
        this.$refs.scrollCom.refresh1();
      }
    });
  },
  updated() {},
  methods: {
    addCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.nowPrice;
      product.iid = this.iid;
      product.count = 1;
      product.checked = true;
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res, 1200);
      });
    },
    scrollContent(x) {
      var positionY = -x.y;
      var length = this.themeTopYs.length;
      if (this.isClick != true) {
        for (let i = 0; i < length; i++) {
          if (
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]
          ) {
            this.$refs.detailNav.currentIndex = i;
          }
          if (i == length - 1) {
            if (positionY >= this.themeTopYs[i]) {
              this.$refs.detailNav.currentIndex = i;
            }
          }
        }
      }
    },
    imageLoad() {
      this.$refs.scrollCom.refresh1();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.goods.$el.offsetTop - 40);
    },
    handleClick(x) {
      this.isClick = true;
      if (x == 0) {
        this.$refs.scrollCom.scroll.scrollTo(0, 0, 300);
      } else {
        this.$refs.scrollCom.scroll.scrollTo(0, -this.themeTopYs[x], 300);
      }
      setTimeout(() => {
        this.isClick = false;
      }, 300);
    },
  },
};
</script>

<style scoped>
.content1 {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  bottom: 49px;
}
.for-you {
  border-left: 5px double pink;
  padding-left: 5px;
  margin: 10px;
  height: 20px;
  color: deeppink;
}
</style>
