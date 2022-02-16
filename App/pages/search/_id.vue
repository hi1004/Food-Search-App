<template>
  <div class="container">
    <!-- loading -->
    <template v-if="loading">
      <div class="skeletons">
        <div class="skeleton image"></div>
        <div class="specs">
          <div class="skeleton title"></div>
          <div class="skeleton spec"></div>
          <div class="skeleton plot"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
        </div>
      </div>
      <Loader
        :size="3"
        :z-index="9"
        fixed />
    </template>
    <div
      v-else
      class="food-details">
      <!-- Img section -->
      <div class="container product-img">
        <Swiper
          class="swiper"
          :options="swiperOption">
          <SwiperSlide>
            <div
              :style="{
                backgroundImage: `url(${requestDiffSizeImage(theFood.imgurl1)})`,
              }"
              class="image"></div>
            <Loader
              v-if="imageLoading"
              absolute />
          </SwiperSlide>
          <SwiperSlide>
            <div
              :style="{
                backgroundImage: `url(${requestDiffSizeImage(theFood.imgurl2)})`,
              }"
              class="image"></div>
            <Loader
              v-if="imageLoading"
              absolute />
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
      </div>
      <!-- Product specification section -->
      <div class="container product-specs">
        <div class="title">
          {{ theFood.prdlstNm }}
        </div>
        <div class="labels">
          <span>{{ theFood.prdkind }}</span>
          <span>{{ theFood.productGb }}</span>
          <!-- <span>{{ theFood.rawmtrl }}</span> -->
        </div>
        <div class="nutrient">
          {{ theFood.nutrient }}
        </div>
        <div>
          <h3>제조</h3>
          {{ theFood.manufacture }}
        </div>
        <div>
          <h3>원재료</h3>
          {{ theFood.rawmtrl }}
        </div>
        <div>
          <h3>알레르기</h3>
          {{ theFood.allergy }}
        </div>
        <div>
          <h3>유형의상태</h3>
          {{ theFood.prdkindstate }}
        </div>
        <div>
          <h3>판매</h3>
          {{ theFood.seller }}
        </div>
      </div>
      <!-- Chart section -->
      <div class="container product-chart">
        <canvas id="nutrient-chart"></canvas>
      </div>
    </div>
    <div
      id="to-search"
      @click="toSearch">
      click
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Loader from '~/components/Loader';
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import Chart from 'chart.js/auto';
  import 'swiper/css/swiper.css';

  export default {
    components: {
      Loader,
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

    // ssr이 실행하기 전 동작
    async asyncData({ store, params }) {
      await store.dispatch('search/searchFoodWithId', {
        id: params.id,
      });
      return {
        imageLoading: true,
      };
    },
    computed: {
      ...mapState('search', ['loading', 'theFood']),
    },
    methods: {
      requestDiffSizeImage(url) {
        // 잘못된 URL(Image)인 경우.
        if (!url || url === 'N/A') {
          this.imageLoading = false;
          return '';
        }
        const src = url;
        // 정상적인 URL인 경우.
        this.$loadImage(src).then(() => {
          this.imageLoading = false;
        });
        return src;
      },
      toSearch() {
        this.$router.push('../search');
      },
      // Create Chart Method
      createChart(chartId) {
        // set default
        let carbohydrate = 666;
        let protein = 666;
        let fat = 666;
        // parsing nutrient data if nutrient data is not unknown
        const nutrient = this.theFood.nutrient;
        if (nutrient != '알수없음') {
          carbohydrate = Number(nutrient.match(/탄수화물 [0-9.]*/)[0].replace('탄수화물 ', ''));
          protein = Number(nutrient.match(/단백질 [0-9.]*/)[0].replace('단백질 ', ''));
          fat = Number(nutrient.match(/지방 [0-9.]*/)[0].replace('지방 ', ''));
        }
        // create chart
        const ctx = document.getElementById(chartId);
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['탄수화물', '단백질', '지방'],
            datasets: [
              {
                label: 'nutrients data',
                data: [carbohydrate, protein, fat],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                hoverOffset: 4,
              },
            ],
          },
          options: {
            responsive: false,
          },
        });
      },
    },
    mounted() {
      this.createChart('nutrient-chart');
    },
    head() {
      return {
        meta: [
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:site', property: 'og:site', content: 'Food Search App' },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.theFood.prdlstNm,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.theFood.nutrient,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.theFood.imgurl1,
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: `${process.env.CLIENT_URL}${this.$route.fullPath}`,
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 40px;
    font-family: 'Noto Sans KR', sans-serif;
    @include media-breakpoint-down(lg) {
      margin-top: 90px;
      .title {
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        text-align: center;
      }
      .labels {
        position: absolute;
        top: 180px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .skeletons {
    display: flex;
    .image {
      flex-shrink: 0;
      width: 500px;
      height: calc(500px * 3 / 2);
      margin-right: 70px;
    }
    .skeleton {
      border-radius: 10px;
      background-color: $gray-200;
      &.title {
        width: 80%;
        height: 70px;
      }
      &.spec {
        width: 60%;
        height: 30px;
        margin-top: 20px;
      }
      &.nutrient {
        width: 100%;
        height: 250px;
        margin-top: 20px;
      }
      &.etc {
        width: 50%;
        height: 50px;
        margin-top: 20px;
      }
    }
  }
  .food-details {
    display: flex;
    color: $gray-600;
    .swiper {
      width: 300px;
      height: calc(300px * 3 / 2);
      margin-right: 70px;
      border-radius: 10px;
      display: flex;
      flex-shrink: 0;
      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        .image {
          width: 100%;
          height: 100%;
          // margin-right: 70px;
          border-radius: 10px;
          background-color: $gray-200;
          background-size: cover;
          background-position: center;
          position: relative;
          flex-shrink: 0;
        }
      }
    }
    #nutrient-chart {
      width: 300px;
      height: 300px;
      margin: 30px 0px;
    }
    .product-specs {
      flex-grow: 1;
      .title {
        color: $black;
        font-family: 'Do Hyeon', sans-serif;
        font-size: 70px;
        line-height: 1;
        margin-bottom: 30px;
      }
      .labels {
        color: $primary;
        span {
          &::after {
            content: '\00b7';
            margin: 0 6px;
          }
          &:last-child::after {
            display: none;
          }
        }
      }
      .nutrient {
        margin-top: 20px;
      }
      img {
        height: 30px;
        flex-shrink: 0;
        margin-right: 6px;
      }
      h3 {
        margin: 24px 0 6px;
        color: $black;
        font-family: 'Do Hyeon', sans-serif;
        font-size: 20px;
      }
    }

    .product-img,
    .product-chart {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @include media-breakpoint-down(xl) {
      .swiper {
        width: 300px;
        height: calc(300px * 3 / 2);
      }
    }
    @include media-breakpoint-down(lg) {
      margin-top: 30px;
      display: block;
      .swiper {
        // margin-bottom: 40px;
        margin: 0 auto 40px;
      }
      #nutrient-chart {
        margin: 20px auto;
      }
    }

    @include media-breakpoint-down(md) {
      .product-specs {
        .title {
          font-size: 50px;
        }
      }
    }
  }
  #to-search {
    position: fixed;
    width: 100px;
    height: 100px;
    background-color: red;
    bottom: 0;
    left: 0;
  }
</style>
