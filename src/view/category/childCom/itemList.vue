<template>
  <div class="item-list">
    <Item
      v-for="(item,index) in InfoList"
      :key="index"
      :message="item"
      :class="{active:index==currentIndex}"
      class="Item"
      @click.native="changeIndex(index)"
    ></Item>
  </div>
</template>

<script>
import Item from "./item";
import GoodsList from "components/content/goods/GoodsList";

export default {
  name: "ItemList",
  props: {
    InfoList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Item,
    GoodsList,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
      this.$emit("changeIndex", this.InfoList[index].maitKey);
    },
  },
};
</script>

<style scoped>
.active {
  background-color: #ff3b02;
}

.item-list {
  position: fixed;
  left: 0;
  top: 40px;
  bottom: 0;
  width: 20%;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: deeppink;
}

.Item {
  flex: 1;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>