<template>
  <Swiper
    class="banner-swiper"
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
    <div class="container">
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
    </div>
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
          // autoplay: { delay: 5000 },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
                renderBullet: function (index, className) {
    return '<span class="' + className + '">'+'<b>' +'0'+ (index + 1) + '</b>'+ '</span>';
  },
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
  .banner-swiper {
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: -70px;
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
    .container {
      box-sizing: border-box;
      height: calc(100vh - 70px);
      position: absolute;
      top: 0;
      left: 50%;
      margin-top: 70px;
      z-index: 1;
      transform: translateX(-50%);
      .swiper-pagination {
        bottom: 50px;
        display: flex;
       align-items: flex-end;
      }
    }
  }
</style>
<style lang="scss">
  .banner-swiper .swiper-pagination-clickable .swiper-pagination-bullet {
    background-color: #fff;
    width: 5px;
    height: 14px;
    border-radius: 0;
    margin: 0 17px;
    opacity: 1;
    transition: height 0.5s ease;
    vertical-align: bottom;
    b {
      color: #fff;
      transform: translateX(-9px);
      position: absolute;
      top: -30px;
      font-weight: 500;
      opacity: 0;
      visibility: hidden;
      transition: 0.5s ease;
    }
    &.swiper-pagination-bullet-active {
      height: 46px !important;
      width: 1px !important;
        b {
      
      visibility: visible;
      opacity: 1;
    }
    }
  }
</style>
