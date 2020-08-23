<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{active:index === currentindex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return { currentindex: 0 };
  },
  methods: {
    itemClick(i) {
      this.currentindex = i;
      this.$emit('tabClick',i)
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: white;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: deeppink;
}
.active span {
  border-bottom: 3px solid deeppink;
}
</style>
