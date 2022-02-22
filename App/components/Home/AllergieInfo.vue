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
                loading="lazy"
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
                loading="lazy"
                alt="우유" />
            </picture>
            <div class="allergie-contents">
              <h3 class="allergie-name">
                우유
              </h3>
              <p class="allergie-description">
                영유아 및 아동에서 흔히 발생하는 식품 알레르기입니다. 징후 및 증상은 경미한 것에서부터 심각한 것까지
                있는데 피부발진, 두드러기같은 피부 증상과 기침과 호흡곤란 등 호흡기 증상, 구토, 복통 등의 위장관 증상이
                포함됩니다. 어린나이 아나필락시스의 주요원인입니다. 다행히 대부분의 아동들은 5~7 세경에 우유 알
                레르기에서 벗어나는 경우가 많습니다. 우유 알레르기 환자는 유제품, 산양유도 주의해야합니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/soybean.jpg" />
              <img
                src="~/assets/images/allergy/soybean.jpg"
                loading="lazy"
                alt="대두" />
            </picture>
            <div class="allergie-contents">
              <h3 class="allergie-name">
                대두
              </h3>
              <p class="allergie-description">
                아동에서 알레르기를 일으키는 식품 중 하나로, 아나필락시스와 같은 심각한 반응은 흔하지 않지만, 기타
                식품알레르기의 경우와 마찬가지로 다양한 증상을 유발할 수 있습니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/wheat.jpg" />
              <img
                src="~/assets/images/allergy/wheat.jpg"
                loading="lazy"
                alt="밀" />
            </picture>
            <div class="allergie-contents">
              <h3 class="allergie-name">
                밀
              </h3>
              <p class="allergie-description">
                밀 알레르기는 아동, 청소년, 성인에게서 비교적 흔하게 발생합니다. 두드러기, 호흡곤란, 위장관 증상,
                아나필락시스 등을 일으키며, 운동과 연관된 특수 형태의 아나필락시스의 흔한 원인입니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/buckwheat.jpg" />
              <img
                src="~/assets/images/allergy/buckwheat.jpg"
                loading="lazy"
                alt="메밀" />
            </picture>
            <div class="allergie-contents">
              <h3 class="allergie-name">
                메밀
              </h3>
              <p class="allergie-description">
                메밀 알레르기는 메밀을 섭취해서 생기는 경우가 대부분이지만, 메밀을 한 번도 섭취해 본 적이 없는데도 메밀
                베개 사용으로 메밀 알레르기가 생기는 경우도 있으며 메밀이 포함된 보습제도 있으니 사용에 주의해야 합니다.
                메밀은 다른 식 품에 비하여 천식, 아나필락시스 등 심한 증상 유발 빈도가 높은 식품입니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/peanut.jpg" />
              <img
                src="~/assets/images/allergy/peanut.jpg"
                loading="lazy"
                alt="호두, 땅콩" />
            </picture>
            <div class="allergie-contents">
              <h3 class="allergie-name">
                호두, 땅콩
              </h3>
              <p class="allergie-description">
                유아기 이후에 주로 나타나며, 성장해 감에 따라 호전이 비교적 잘되는 우유나 계란과는 달리 보다 오래
                지속되는 환자가 많고, 서구에 비하여 국내에서는 발생 빈도가 낮지만 최근 증가하는 원인식품입니다. 증상은
                경미한 것에서부터 아나 필락시스까지 다양하게 나타나며, 땅콩과 여러 종류의 견과류에 동시에 반응을 보이는
                환자도 있습니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/seafood..jpg" />
              <img
                src="~/assets/images/allergy/seafood..jpg"
                loading="lazy"
                alt="고등어, 게, 새우, 오징어, 조개류" />
            </picture>
            <div class="allergie-contents">
              <h3 class="allergie-name">
                고등어, 게, 새우, 오징어, 조개류
              </h3>
              <p class="allergie-description">
                고등어, 게, 새우, 오징어, 조개류 알레르기는 주로 두드러기, 코막힘, 입가려움 등 경미한 증상을 일으키지만
                심할 경우에는 아주 적은 양에도 생명을 위협하는 증상을 동반할 수 있습니다. 생선 등 해산물 알레르기는
                성인이 되어 처음 증상이 나타나는 경우도 흔하며 잘 없어지지 않고 평생 지속되는 경우가 많습니다
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/peach.jpg" />
              <img
                src="~/assets/images/allergy/peach.jpg"
                loading="lazy"
                alt="복숭아, 토마토" />
            </picture>
            <div class="allergie-contents">
              <h3 class="allergie-name">
                복숭아, 토마토
              </h3>
              <p class="allergie-description">
                과일이나 채소 알레르기의 증상은 주로 두드러기와 구강 알레르기 증후군이지만 구토와 복통, 아토피피부염의
                악화, 천식과 호흡 곤란을 유발하는 경우도 있습니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg">
            <picture class="bg__img">
              <source srcset="~/assets/images/allergy/meat.jpg" />
              <img
                src="~/assets/images/allergy/meat.jpg"
                loading="lazy"
                alt="돼지고기, 소고기, 닭고기" />
            </picture>
            <div class="allergie-contents">
              <h3 class="allergie-name">
                돼지고기, 소고기, 닭고기
              </h3>
              <p class="allergie-description">
                돼지고기, 쇠고기, 닭고기 알레르기는 흔히 나타나지는 않습니다. 그러나 돼지고기, 쇠고기, 닭고기를 전부
                제한하는 경우에는 햄, 철( 고기 속에 함유된 철분) 섭취량이나 철 흡수의 저하에 따른 빈혈의 예방을 고려해야
                하고 철분을 많이 함유하는 식품을 대체하여 섭취해야 합니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <div
          class="swiper-button-prev swiper-btn"
          slot="button-prev"></div>
        <div
          class="swiper-button-next swiper-btn"
          slot="button-next"></div>
        <div
          class="swiper-pagination swiper-pagination-progress"
          slot="pagination"></div>
        <div
          class="swiper-pagination swiper-pagination-fraction"
          slot="pagination"></div>
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
          slidesPerView: 1.5,
          spaceBetween: 10,
          loopedSlides: 2,
          centeredSlides: true,
          loop: true,
          speed: 400,
          pagination: {
            el: '.swiper-pagination-fraction',
            clickable: true,
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            1130: {
              slidesPerView: 1, //브라우저가 768보다 클 때
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 2, //브라우저가 768보다 클 때
              spaceBetween: 40,
            },
            540 :{
              slidesPerView: 'auto', //브라우저가 768보다 클 때
              spaceBetween: 30,
            }
          },
        },
      };
    },
    computed: {
      mainSwiper() {
        return this.$refs.mySwiper.$swiper;
      },
    },
  };
</script>

<style lang="scss" scoped>
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
  .AllergieInfo-section {
    padding: 11rem 0;
    background: #f7f7f7;
    overflow: hidden;
    .AllergieInfo-container {
      padding: 0;
      max-width: 1130px;
      margin: 0 auto;
      @include media-breakpoint-down(sm) {
        max-width: 100%;
      }
      .title {
        font-size: 5.8rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        margin-bottom: 3rem;
        @include media-breakpoint-down(xl) {
          padding: 0 1rem;
          font-size: 4.8rem;
        }
        @include media-breakpoint-down(sm) {
          padding: 0 2rem;
          font-size: 3.8rem;
        }
      }
      .allergie-info-swiper {
        height: 700px;
        overflow: visible;
        @include media-breakpoint-down(md) {
          height: 350px;
          overflow: hidden;
        }
        .swiper-wrapper {
          background: green;
        }
        .swiper-slide {
          background: #eee;
          opacity: 0.8;
          transition: opacity 0.4s;
          &.swiper-slide-active {
            opacity: 1;
          }
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
                @include media-breakpoint-down(lg) {
                  padding: 0 1.5rem 2.5rem;
                }
              .allergie-name {
                font-size: 3.6rem;
                margin-bottom: 2rem;
                display: inline-block;
                position: relative;
                 @include media-breakpoint-down(lg) {
                  font-size: 2.6rem;
                }
                 @include media-breakpoint-down(sm) {
                  font-size: 2.0rem;
                }
                &::after {
                  content: '';
                  position: absolute;
                  display: block;
                  left: 0;
                  bottom: -5px;
                  width: 0px;
                  height: 4px;
                  background: $primary;
                  transition: 0.4s ease-out;
                }
              }
              .allergie-description {
                @include media-breakpoint-down(md) {
                  display: none;
                }
              }
            }
            &:hover .allergie-name::after {
              width: 100%;
            }
          }
        }
        .swiper-pagination {
          height: 4px;
          left: 50%;
          transform: translateX(-50%);
          top: 105% !important;
        }
      }
    }
  }
</style>
<style lang="scss">
  .swiper-pagination-progressbar-fill {
    background: $primary !important;
  }
</style>
