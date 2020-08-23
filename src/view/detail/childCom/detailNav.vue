<template>
  <div>
    <nav-bar>
      <div slot="left" @click="back" class="back">
        <!-- <img src="../../../assets/img/common/top.png" alt=""> -->
        <img src="@/assets/img/common/back.svg" alt="">
        <!-- <img src="@/assets/img/profile/email.png" alt=""> -->
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="title-item"
          :class="{isActive:currentIndex == index}"
          @click="handleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/comm/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      currentIndex: 0,
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  methods: {
    back(){
      this.$router.push('/')
    },
    handleClick(x) {
      this.currentIndex = x;
      this.$emit('handleClick',x)
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  text-align: center;
  font-size: 14px;
}
.title-item {
  flex: 1;
}
.isActive{
  color: deeppink;
}
.back img{
  margin-top: 10px;
}
</style>
