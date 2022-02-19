<template>
  <section class="AllergieInfo-section">
    <div class="AllergieInfo-container">
      <h2 class="title">
        Food Allergies
      </h2>
      <Swiper
        ref="mySwiper"
        class="allergie-info-swiper"
        :options="swiperOption">
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/egg.jpg" />
              <img
                src="~/assets/images/allergy/egg.jpg"
                alt="난류" />
            </picture>
            <div class="allergie-contents">
              <h3 class="allergie-name">
                난류
              </h3>
              <p class="allergie-description">
                알레르기를 일으키는 식품 중 가장 흔한 것의 하나로, 특히 영유아에게서 흔하게 나타납니다. 징후 및 증상은
                경미한 것에서부터 심각한 것까지 있는데 피부발진, 두드러기같은 피부 증상, 기침, 호흡곤란 등 호흡기 증상,
                구토, 복통 등의 위장관 증상이 포함됩니다. 어린나이 아나필락시스의 주요원인입니다. 다행히 대부분의
                아동들은 5~7 세경에 알레르기에서 벗어나는 경우가 많습니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/milk.jpg" />
              <img
                src="~/assets/images/allergy/milk.jpg"
                alt="우유" />
            </picture>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/soybean.jpg" />
              <img
                src="~/assets/images/allergy/soybean.jpg"
                alt="대두" />
            </picture>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/wheat.jpg" />
              <img
                src="~/assets/images/allergy/wheat.jpg"
                alt="밀" />
            </picture>
          </div>
        </SwiperSlide>
        <div
          class="swiper-button-prev swiper-btn"
          slot="button-prev"></div>
        <div
          class="swiper-button-next swiper-btn"
          slot="button-next"></div>
        <div
          class="swiper-pagination swiper-pagination-fraction"
          slot="pagination"></div>
        <div
          class="swiper-pagination swiper-pagination-progress"
          slot="pagination"
          ref="subSwiper">
        </div>
      </Swiper>
    </div>
  </section>
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
          slidesPerView: 'auto',
          spaceBetween: 60,
          loopedSlides: 2,
          centeredSlides: true,
          loop: true,
          // autoplay: { delay: 5000, disableOnInteraction: false },
          pagination: {
            el: '.swiper-pagination-progress',
            clickable: true,
            type: 'progressbar',
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
      mainSwiper() {
        return this.$refs.mySwiper.$swiper;
      },
      subSwiper() {
        return this.$refs.subSwiper.$swiper;
      }
    },
    mounted() {
      console.log(this.mainSwiper.controller)
      console.log(this.subSwiper)
      this.mainSwiper.controller.control = this.subSwiper;
    }
  };
</script>

<style lang="scss" scoped>
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
  .AllergieInfo-section {
    padding: 11rem 0;
    background: #f7f7f7;
    .AllergieInfo-container {
      padding: 0;
      max-width: 1130px;
      margin: 0 auto;
      .title {
        font-size: 5.8rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        margin-bottom: 3rem;
      }
      .allergie-info-swiper {
        height: 700px;
        overflow: visible;
        .swiper-wrapper {
          background: green;
        }
        .swiper-slide {
          background: #eee;
          .bg {
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            &::after {
              content: '';
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 70%;
              background: linear-gradient(0deg, rgb(16 24 32), rgb(16 24 32 / 48%), rgb(16 24 32 / 0%));
            }
            &__img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: 0.4s ease-out;
              img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: 0.4s ease-out;
              }
            }
            &:hover img {
              transform: scale(1.1);
            }
            .allergie-contents {
              position: absolute;
              bottom: 0;
              left: 0;
              color: $white;
              z-index: 1;
              line-height: 1.4;
                  padding: 0 6rem 5.5rem;
              .allergie-name {
                font-size: 3.6rem;
                margin-bottom: 2rem;
              }
            }
          }
        }
        .swiper-pagination {
          height: 4px;
          left: 50%;
          transform: translateX(-50%);
          top: 112% !important;
        }
      }
    }
  }
</style>
<style lang="scss">
  .swiper-pagination-progressbar-fill {
    color: $primary !important;
  }
</style>
