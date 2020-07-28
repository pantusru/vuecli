<template>
  <div class="banner">
    <VueSlickCarousel v-bind="Settings">
      <a class="banner_img" v-for="data in img" :key="data.id">
        <img :src="data.src" :alt="data.alt" />
      </a>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ["img"],
  components: { VueSlickCarousel },
  data() {
    return {
      Settings: {
        fade: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000
      }
    };
  }
};
</script>

<style lang="sass">
.banner
    +size(3)
</style>
