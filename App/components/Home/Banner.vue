<template>
  <Swiper
    class="swiper"
    :options="swiperOption">
    <SwiperSlide
      v-for="index in 3"
      :key="index">
      <div
        :style="{
          backgroundImage: `url(${bannerURL[index-1]})`,
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
  </Swiper>
</template>

<script>
  import { mapState } from 'vuex';
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
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
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      };
    },
    computed: {
      ...mapState('banner', ['bannerURL']),
    },
  };
</script>

<style lang="scss">
  .swiper {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-shrink: 0;
      overflow:hidden;
       .swiper-wrapper {
        display:flex;
         .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
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
     
  }
</style>
