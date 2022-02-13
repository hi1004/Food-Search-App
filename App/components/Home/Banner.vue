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
          <h1>
            <span class="swiper-title">Safe food,</span>
            <span class="swiper-title">Safe Table01</span>
          </h1>
          <p>
            <span class="swiper-phrase">행복을 담은</span>
            <span class="swiper-phrase">안전한 먹거리로</span>
            <span class="swiper-phrase">가정에 안전한 식탁을</span>
            <span class="swiper-phrase">만들어보세요</span>               
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
          <h1>
            <span class="swiper-title">소비자가 </span>
            <span class="swiper-title">더 건강해지는 </span>
            <span class="swiper-title">먹거리 안전</span>            
          </h1>
          <p>
            <span class="swiper-phrase">소비자가 더 건강할수록 </span>
            <span class="swiper-phrase">먹거리도 더욱 안전해집니다.</span>
            <br />
            <span class="swiper-phrase">소비자의 건강한 </span>
            <span class="swiper-phrase">식생활을 확보하고 </span>
            <span class="swiper-phrase">일상의 가치를 더해보세요</span>
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
          <h1>
            <span class="swiper-title">Safe food, </span>
            <span class="swiper-title">Safe Table03</span>            
          </h1>
          <p>
            <span class="swiper-phrase">우리의 먹거리가 공정해지고 </span>
            <span class="swiper-phrase">안전해지는 날까지 </span>
            <span class="swiper-phrase">안전한 식탁이 도와드리겠습니다.</span>
            <br />
            <span class="swiper-phrase">안전한 식탁을 통해 </span>
            <span class="swiper-phrase">여러 가지의 음식과 </span>
            <span class="swiper-phrase">영양성분도 확인해보세요.</span>
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
              const title = document.querySelectorAll('.swiper-title');
              const phrase = document.querySelectorAll('.swiper-phrase');
              title.forEach((step, i) => {
                gsap.fromTo(
                  step,
                  {autoAlpha:0, x:-200},
                  {autoAlpha:1, x: 100, delay: (i + 1) * 0.1, opacity: 1, duration: 0.2, ease: "power4.out"});
              });
              phrase.forEach((step, i) => {
                gsap.fromTo(
                  step,
                  {autoAlpha:0, x:-200},
                  {autoAlpha:1, x: 100, delay: (i + 1) * 0.1, opacity: 1, duration: 0.2, ease: "power4.out"});
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
      .swiper-contents {
        .swiper-title, .swiper-phrase {
          display: inline-block;
        }
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
