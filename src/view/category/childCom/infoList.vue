<template>
  <div class="info-list">
    <info-list-item
      class="info-list-item"
      v-for="(item,index) in InfoList"
      :key="index"
      :goodsInfo="item"
    />
  </div>
</template>

<script>
import InfoListItem from "./infoListItem";

export default {
  name: "InfoList",
  components: {
    InfoListItem,
  },
  props: {
    InfoList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.info-list {
  position: relative;
  margin-left: 20%;
  top: 40px;
  width: 80%;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 90px);
  overflow: scroll;
}
</style>