<template>
  <Swiper
    ref="mySwiper"
    class="banner-swiper"
    @slideChange="onSwiperSlideChangeTransitionStart"
    :options="swiperOption">
    <div
      class="swiper-pagination"
      slot="pagination"></div>
    <div
      class="swiper-button-prev swiper-btn"
      slot="button-prev"></div>
    <div
      class="swiper-button-next swiper-btn"
      slot="button-next"></div>

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

      <div class="swiper-contents">
        <h1>
          <span class="text-overflow-hidden">
            <span class="swiper-title text-delay--0">Safe food,</span>
          </span>
          <span class="text-overflow-hidden">
            <span class="swiper-title text-delay--1">Safe Table</span>
          </span>
        </h1>
        <p>
          <span class="text-overflow-hidden">
            <span class="swiper-phrase text-delay--3">행복을 담은 안전한 먹거리로</span>
          </span>
          <span class="text-overflow-hidden">
            <span class="swiper-phrase text-delay--4">가정에 안전한 식탁을 만들어보세요</span>
          </span>
        </p>
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

      <div class="swiper-contents">
        <h1>
          <span class="text-overflow-hidden">
            <span class="swiper-title text-delay--0">소비자가 </span>
          </span>
          <br />
          <span class="text-overflow-hidden">
            <span class="swiper-title text-delay--1">더 건강해지는 </span>
          </span>
          <span class="text-overflow-hidden">
            <span class="swiper-title text-delay--2">먹거리 안전</span>
          </span>
        </h1>
        <p>
          <span class="text-overflow-hidden">
            <span class="swiper-phrase text-delay--4">소비자가 더 건강할수록 먹거리도 더욱 안전해집니다.</span>
          </span>
          <br />
          <span class="text-overflow-hidden">
            <span class="swiper-phrase text-delay--5">소비자의 건강한 식생활을 확보하고 일상의 가치를 더해보세요</span>
          </span>
        </p>
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

      <div class="swiper-contents">
        <h1>
          <span class="text-overflow-hidden">
            <span class="swiper-title text-delay--0">우리들의 </span>
          </span>
          <span class="text-overflow-hidden">
            <span class="swiper-title text-delay--1">행복한 식사</span>
          </span>
        </h1>
        <p>
          <span class="text-overflow-hidden">
            <span
              class="swiper-phrase text-delay--3">우리의 먹거리가 공정해지고 안전해지는 날까지 안전한 식탁이 도와드리겠습니다
            </span>
          </span>
          <br />
          <span class="text-overflow-hidden">
            <span
              class="swiper-phrase text-delay--4">안전한 식탁을 통해 여러 가지의 음식과 영양성분도 확인해보세요</span>
          </span>
        </p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
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
          // autoplay: { delay: 5000, disableOnInteraction: false },
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
              const title = document.querySelectorAll('.swiper-slide-active .swiper-title');
              const phrase = document.querySelectorAll('.swiper-slide-active .swiper-phrase');
              title.forEach(step => step.classList.remove('text-active'));
              phrase.forEach(step => step.classList.remove('text-active'));
            },
            slideChangeTransitionEnd() {
              const title = document.querySelectorAll('.swiper-slide-active .swiper-title');
              const phrase = document.querySelectorAll('.swiper-slide-active .swiper-phrase');
              title.forEach(step => step.classList.add('text-active'));
              phrase.forEach(step => step.classList.add('text-active'));
            },
          },
        },
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper;
      },
    },
    mounted() {
      this.$store.dispatch('cursor/mouse');
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
  .banner-swiper {
    width: 100%;
    height: 100vh;
    display: flex;
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
        bottom: 50px !important;
        display: flex;
        align-items: flex-end;
      }
    }
    .swiper-slide {
      .video-slide-player {
        width: 100%;
        height: 100%;
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
        font-family: 'Noto Sans KR', sans-serif;
        position: absolute;
        top: 50%;
        left: 120px;
        transform: translateY(-50%);
        height: 50vh;
        color: #fff;
        @include media-breakpoint-down(lg) {
          left: 60px;
        }
        @include media-breakpoint-down(sm) {
          left: 0;
          padding: 0 20px;
          top: auto;
          bottom: 0;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        p {
          margin-top: 80px;
        }
        .text-overflow-hidden,
        .span {
          overflow: hidden;
          margin-right: 0.25rem;
          display: inline-block;
          vertical-align: top;
          margin: 0;

          .swiper-title {
            font-size: 5.5rem;
            font-weight: 700;
            transition: transform 1s cubic-bezier(0.83, 0, 0.17, 1) 1.8s;
            line-height: 1.25;
            letter-spacing: 0;
            @include media-breakpoint-down(sm) {
              font-size: calc(-3px + 15vw);
            }
          }
          .swiper-phrase {
            font-weight: 400;
            font-size: 23px;
            line-height: 40px;
            letter-spacing: -1px;
            transition: transform 0.5s cubic-bezier(0.83, 0, 0.17, 1) 2s;
            @include media-breakpoint-down(lg) {
              font-size: 16px;
              line-height: 1.5;
            }
          }
          .swiper-title,
          .swiper-phrase {
            opacity: 0;
            display: inline-block;
            transform: translateX(-110%);
            &.text-active {
              opacity: 1;
              transform: translateX(0);
              &.text-delay--0 {
                transition-delay: 0s;
              }
              &.text-delay--1 {
                transition-delay: 0.4s;
              }
              &.text-delay--2 {
                transition-delay: 0.8s;
              }
              &.text-delay--3 {
                transition-delay: 1.2s;
              }
              &.text-delay--4 {
                transition-delay: 1.6s;
              }
              &.text-delay--5 {
                transition-delay: 2s;
              }
            }
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff !important;
    opacity: 0.5;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
    &::after {
      font-weight: bolder;
    }
    @include media-breakpoint-down(sm) {
      display: none;
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
    margin: 0 17px !important;
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
