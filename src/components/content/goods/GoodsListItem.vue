<template>
  <div class="goods-item" @click="getDetail(goodsItem)" v-if="goodsItem !=null">
    <div>
      <img v-lazy="showImg" alt @load="imageLoad" />
    </div>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
    price() {
      return this.goodsItem.orgPrice || "￥" + this.goodsItem.price;
    },
  },
  created() {},
  methods: {
    imageLoad() {
      // this.$bus.$emit("itemImageLoad");
      if (this.$route.path.indexOf("/home") != -1) {
        this.$bus.$emit("itemImageLoad");
      } else if (this.$route.path.indexOf("/detail") != -1) {
        this.$bus.$emit("detailLoad");
      }
    },
    getDetail(x) {
      if (x.iid) {
        this.$router.push({ name: "detail", params: { iid: x.iid } });
      }
    },
  },
  watch: {
    // $route: {
    //   handler(val, oldval) {
    //     if (this.$route.name == "detail") {
    //       this.isShow = false;
    //     } else {
    //       this.isShow = true;
    //     }
    //   },
    // },
  },
};
</script>

<style  scoped>
.goods-item {
  box-sizing: border-box;
  width: 48%;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  /* position: absolute;
  bottom: 5px;
  left: 0;
  right: 0; */
  overflow: hidden;
  text-align: center;
  margin-bottom: 5px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info .price {
  color: deeppink;
  margin-right: 20px;
}
.goods-info .cfav {
  position: relative;
}
.goods-info .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>