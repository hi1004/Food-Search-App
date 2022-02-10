<template>
  <Swiper
    ref="mySwiper"
    class="banner-swiper"
    @slideChange="onSwiperSlideChangeTransitionStart"
    :options="swiperOption">
    <SwiperSlide>
      <video
        class="video-slide-player video-slide-player01"
        autoplay
        muted
        playsinline
        loop>
        <source
          src="~/assets/video/banner_video01.mp4"
          type="video/mp4" />
      </video>
    </SwiperSlide>
    <SwiperSlide>
      <video
        class="video-slide-player video-slide-player02"
        autoplay
        muted
        playsinline
        loop>
        <source
          src="~/assets/video/banner_video02.mp4"
          type="video/mp4" />
      </video>
    </SwiperSlide>
    <SwiperSlide>
      <video
        class="video-slide-player video-slide-player03"
        autoplay
        muted
        playsinline
        loop>
        <source
          src="~/assets/video/banner_video03.mp4"
          type="video/mp4" />
      </video>
    </SwiperSlide>
    <!-- <SwiperSlide
      v-for="index in 2"
      :key="index">
      <div
        :style="{
          backgroundImage: `url(${bannerURL[index]})`,
        }"
        class="image"></div>
    </SwiperSlide> -->
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
          autoplay: { delay: 5000 },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '<b>' + '0' + (index + 1) + '</b>' + '</span>';
            },
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            slideChange: function () {
              console.log('change')
              if (this.isEnd) {
            
                console.log('end')
              }
              if (this.isBeginning) {
             
                console.log('start')
              }
            }
          },
        },
      };
    },
    computed: {
      ...mapState('banner', ['bannerURL']),
      swiper() {
        return this.$refs.mySwiper.$swiper;
      },
    },
    methods: {
      onSwiperSlideChangeTransitionStart() {
        const swiperPaginationActive = document.querySelector('.swiper-pagination-bullet-active');
        const pageNo = swiperPaginationActive.childNodes[0].textContent;
        const video02 = document.querySelector('.video-slide-player.video-slide-player02');
        const video03 = document.querySelector('.video-slide-player.video-slide-player03');
        if (pageNo === '02' ) {
          video02.play();
          video03.pause();
        } else if (pageNo === '03') {
          video03.play();
          video02.pause();
        } else {
          video02.pause();
          video03.pause();
        }
      },

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
    &:hover .cursor {
      width: 100px;
      height: 100px;
      background-color: red;
      position: absolute;
      z-index: 10;
    }

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
  .swiper-button-prev, .swiper-button-next {
    color: #fff;
    opacity: .5;
    &:hover {
      opacity: 1;
    }
  }
  .swiper-button-prev {
    margin-left: 30px;
  }
   .swiper-button-next {
    margin-right: 30px;
  }

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
