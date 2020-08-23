<template>
  <div class="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
      <img :src="item.image" alt class="recommends-img" />
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    recommends: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.recommends {
  display: flex;
  border-bottom: 8px solid #ededed;
}
.recommends-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.recommends img {
  width: 70%;
  margin-bottom: 5px;
}
</style>
