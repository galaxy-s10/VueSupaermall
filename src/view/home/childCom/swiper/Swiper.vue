<template>
  <div v-if="imgs.length>0">
    <!-- <div > -->
    <Swiper ref="mySwiper" :options="swiperOptions">
      <!-- <swiper-slide v-for="(item,index) in imgs" :key="index"> -->
      <swiper-slide v-for="(item,index) in imgs" :key="index">
        <img class="swiper-img" :src="item.image" alt @load="imageLoad" />
      </swiper-slide>
      <!-- <swiper-slide class="swiper-img">Slide 1</swiper-slide>
      <swiper-slide class="swiper-img">Slide 2</swiper-slide>
      <swiper-slide class="swiper-img">Slide 3</swiper-slide>
      <swiper-slide class="swiper-img">Slide 4</swiper-slide>
      <swiper-slide class="swiper-img">Slide 5</swiper-slide>-->
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
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
    return {
      swiperOptions: {
        autoplay: {
          delay: 1000, //1秒切换一次
          disableOnInteraction: false,
          // reverseDirection: true,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        // observer: true,
        // observeParents: true,
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
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