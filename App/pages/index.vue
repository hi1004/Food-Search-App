<template>
  <div>
    <Swiper
      class="swiper"
      :options="swiperOption">
      <SwiperSlide>
        <div
          :style="{
            backgroundImage: `url(~/assets/images/banner01.png)`,
          }"
          class="image"></div>
        <Banner />
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
      <!-- <Banner /> -->
    </Swiper>
    <toTop />
  </div>
</template>

<script>
  import toTop from '~/components/toTop';
  import Banner from '~/components/Home/banner';
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  export default {
    components: {
      toTop,
      Banner,
      Swiper,
      SwiperSlide,
    },
     data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: false,
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
  }
</script>

<style lang="scss" scoped>
  .image {
    width: 100%;
    height: 100vh;
  }
</style>
