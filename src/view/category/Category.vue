<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <item-list :info-list="leftNav" @changeIndex="changeIndex"></item-list>
    <info-list :info-list="goodsList"></info-list>
  </div>
</template>

<script>
import { getCategory, getSubcategory } from "api/category";
import NavBar from "components/comm/navbar/NavBar";
import itemList from "./childCom/itemList";
import infoList from "./childCom/infoList";
export default {
  components: {
    NavBar,
    itemList,
    infoList,
  },
  data() {
    return {
      leftNav: [],
      goodsList: [],
    };
  },
  mounted() {
    /*在这里保存分类左边的信息*/
    getCategory().then((res) => {
      this.leftNav = res.data.category.list;
      getSubcategory(this.leftNav[0].maitKey).then((res) => {
        this.goodsList = res.data.list;
      });
    });
  },
  methods: {
    changeIndex(maitKey) {
      getSubcategory(maitKey).then((res) => {
        this.goodsList = res.data.list;
      });
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: deeppink;
  color: white;
}
</style>
