<template>
  <Swiper
    ref="mySwiper"
    class="banner-swiper"
    @slideChange="onSwiperSlideChangeTransitionStart"
    :options="swiperOption">
    <SwiperSlide class="swiper-slide">
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
      <div class="container">
        <div class="swiper-contents">
          <h1 class="fade-in first">
            Safe food, Safe Table01
          </h1>
          <p class="fade-in second">
            행복을 담은 안전한 먹거리로 가정에 안전한 식탁을 만들어보세요
          </p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
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
      <div class="container">
        <div class="swiper-contents">
          <h1 class="fade-in">
            소비자가 더 건강해지는 먹거리 안전
          </h1>
          <p class="fade-in">
            소비자가 더 건강할수록 먹거리도 더욱 안전해집니다.
            소비자의 건강한 식생활을 확보하고 일상의 가치를 더해보세요
          </p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
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
      <div class="container">
        <div class="swiper-contents">
          <h1 class="fade-in">
            Safe food, Safe Table03
          </h1>
          <p class="fade-in">
            우리의 먹거리가 공정해지고 안전해지는 날까지 안전한 식탁이 도와드리겠습니다. 
            안전한 식탁을 통해 여러 가지의 음식과 영양성분도 확인해보세요.
          </p>
        </div>
      </div>
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
    </div>
  </Swiper>
</template>

<script>
  import { mapState } from 'vuex';
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';
  import { gsap } from 'gsap';
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
          // autoplay: { delay: 5000,  disableOnInteraction: false, },
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
        
              const fadeEls = document.querySelectorAll('.fade-in');
              fadeEls.forEach((fadeEl, index) => {
                gsap.fromTo(fadeEl,{autoAlpha:0,x:0},{autoAlpha:1,x:200, delay: (index + 1) * 0.05, opacity: 1, duration: 1});
              });
            },
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
        if (pageNo === '02') {
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
    mounted() {
      

    }
  };
</script>

<style lang="scss" scoped>
  .fade-in {
    opacity: 0;
  }
  .banner-swiper {
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: -70px;
    flex-shrink: 0;
    overflow: hidden;
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
    .swiper-slide {
      .video-slide-player {
            width: 100%;
        height: 100vh;
        object-fit: cover;
      }
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
<style lang="scss">
.swiper-slide {
    .container {
        .swiper-contents {
          position: absolute;
          top: 20vh;
          color: #fff;
        }
      }
}
      

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    opacity: 0.5;
    transition: 0.3s;
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
