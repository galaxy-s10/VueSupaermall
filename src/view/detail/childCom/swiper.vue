<template>
  <div v-if="topImages!=null">
    <!-- <Swiper :options="swiperOptions" class="swiper">
      <swiper-slide v-for="item in topImages" :key="item">
        <img class="swiper-img" :src="item" alt @load="imageLoad" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>-->
    <Swiper :delay="2000">
      <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt @load="imageLoad" class="swiper-img" />
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
// import "swiper/dist/css/swiper.css";
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { Swiper, SwiperItem } from "components/comm/SwiperApp/index";
export default {
  components: {
    Swiper,
    // SwiperSlide,
    SwiperItem,
  },
  props: {
    topImages: {
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
  created() {
    // console.log(this.imgs);
  },
  mounted() {
    // console.log("g");
    // console.log(this.imgs);
    // this.swiper.slideTo(1, 1000, false);
  },
  methods: {
    imageLoad() {
      // console.log("swiperImageLoad");
      // this.$emit("swiperImageLoad");
    },
  },
};
</script>

<style scoped>
.swiper-img {
  width: 100%;
  height: 300px;
}
</style>
