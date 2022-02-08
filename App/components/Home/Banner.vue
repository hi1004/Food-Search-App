<template>
  <Swiper
    class="swiper"
    :options="swiperOption">
    <SwiperSlide
      v-for="index in 3"
      :key="index">
      <div
        :style="{
          backgroundImage: `url(${bannerURL[index - 1]})`,
        }"
        class="image"></div>
    </SwiperSlide>
    <div
      class="swiper-pagination"
      slot="pagination"></div>
    <div
      class="swiper-button-prev"
      slot="button-prev"></div>
    <div
      class="swiper-button-next"
      slot="button-next"></div>
    <div
      class="swiper-scrollbar"
      slot="scrollbar"></div>
  </Swiper>
</template>

<script>
  import { mapState } from 'vuex';
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    directives: {
      swiper: directive,
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          effect: 'fade',
          autoplay: { delay: 5000 },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
        },
      };
    },
    computed: {
      ...mapState('banner', ['bannerURL']),
    },
  };
</script>

<style lang="scss" scoped>
  .swiper {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-shrink: 0;
    overflow: hidden;
    .swiper-slide {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .image {
        width: 100%;
        height: 100vh;
        background-color: $gray-200;
        background-size: cover;
        background-position: center;
        position: relative;
        flex-shrink: 0;
      }
    }
  }
</style>
