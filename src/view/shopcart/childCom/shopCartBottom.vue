<template>
  <div class="cart-bottom">
    <div class="all" @click="selectAll">
      <img src="../../../assets/img/cart/tick.svg" alt :class="{activ:$store.getters.IsSelectAll}" />
      <span>全选</span>
    </div>
    <div class="price">合计:{{allPrice|Price}}</div>
    <div class="pay" @click="Pay">去结算({{checkedCount}})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartBottom",

  methods: {
    selectAll() {
      if (this.$store.state.cartList.length == 0) {
        this.$toast.show("没有商品可选!", 1000);
        return;
      }
      this.$store.commit("changeIsSelectAll");
    },
    async Pay() {
      try {
        var res = await this.$store.dispatch("checkLeast");
      } catch (err) {
        this.$toast.show(err, 1000);
        return;
      }
      this.$toast.show(res, 1000);
    },
  },
  computed: {
    ...mapGetters(["IsSelectAll", "checkedCount", "allPrice"]),
  },
  filters: {
    Price(price) {
      return "￥" + price + "元";
    },
  },
};
</script>

<style scoped>
.activ {
  background-color: red;
}

.cart-bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  background-color: rgba(231, 231, 231, 0.9);
  display: flex;
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
}

.all {
  display: flex;
  align-items: center;
  font-size: 12px;
  flex: 1;
}

.all img {
  border: 2px solid #aaa;
  border-radius: 50%;
  transform: scaleX(0.8) scaleY(0.8);
}

.price {
  flex: 3;
  font-size: 15px;
}

.pay {
  background-color: rgba(255, 84, 45, 0.89);
  color: white;
  font-size: 14px;
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  font-size: 13px;
}
</style>