<template>
  <div>
    <nav-bar class="nav">
      <div slot="center">个人中心</div>
    </nav-bar>
    <user-info></user-info>
  </div>
</template>

<script>
import NavBar from "components/comm/navbar/NavBar";
import UserInfo from "./childCom/UserInfo";
export default {
  components: {
    NavBar,
    UserInfo,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: deeppink;
  color: white;
}
</style>
