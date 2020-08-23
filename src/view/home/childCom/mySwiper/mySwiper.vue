<template>
  <div v-if="imgs.length>0">
    <!-- <Swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in imgs" :key="index">
        <img class="swiper-img" :src="item.image" alt @load="imageLoad" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>-->
    <Swiper :delay="2000">
      <swiper-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.image" alt @load="imageLoad" />
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/comm/SwiperApp/index";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    imageLoad() {
      this.$emit("swiperImageLoad");
    },
  },
};
</script>

<style scoped>
.swiper-img {
  width: 100%;
}
</style>