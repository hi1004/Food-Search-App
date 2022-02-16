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
      class="product-container">
      <div class="product-title-section">
        <div class="product-name">
          {{ theFood.prdlstNm }}
        </div>
        <div class="product-labels">
          <span>{{ theFood.prdkind }}</span>
          <span>{{ theFood.productGb }}</span>
          <!-- <span>{{ theFood.rawmtrl }}</span> -->
        </div>
      </div>
      <div class="product-visual-section">
        <!-- Img section -->
        <div class="product-img">
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
        <!-- Chart section -->
        <div class="product-chart">
          <canvas id="nutrient-chart"></canvas>
        </div>
      </div>      
      <!-- Product specification section -->
      <div class="product-spec-section">
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
        this.$router.push('../search/result');
      },
      // Create Chart Method
      createChart(chartId) {
        // set default
        let kcal = 0;
        let carbohydrate = 0;
        let protein = 0;
        let fat = 0;
        let transFat = 0;
        let saturatedFat = 0;
        let cholesterol = 0;
        let natrium = 0;
        let sugars = 0;
        let calcium = 0;
        let iron = 0;
        // parsing nutrient data if nutrient data is not unknown
        const nutrient = this.theFood.nutrient;
        if (nutrient != '알수없음' && nutrient != '알 수 없음' && nutrient) {
          kcal = nutrient.match(/열량 [0-9.]*/) ? Number(nutrient.match(/열량 [0-9.]*/)[0].replace('열량 ', '')) : 0;
          carbohydrate = nutrient.match(/탄수화물 [0-9.]*/) ? Number(nutrient.match(/탄수화물 [0-9.]*/)[0].replace('탄수화물 ', '')) : 0;
          protein = nutrient.match(/단백질 [0-9.]*/) ? Number(nutrient.match(/단백질 [0-9.]*/)[0].replace('단백질 ', '')) : 0;
          fat = nutrient.match(/지방 [0-9.]*/) ? Number(nutrient.match(/지방 [0-9.]*/)[0].replace('지방 ', '')) : 0;
          transFat = nutrient.match(/트랜스지방 [0-9.]*/) ? Number(nutrient.match(/트랜스지방 [0-9.]*/)[0].replace('트랜스지방 ', '')) : 0;
          saturatedFat = nutrient.match(/포화지방 [0-9.]*/) ? Number(nutrient.match(/포화지방 [0-9.]*/)[0].replace('포화지방 ', '')) : 0;
          cholesterol = nutrient.match(/콜레스테롤 [0-9.]*/) ? Number(nutrient.match(/콜레스테롤 [0-9.]*/)[0].replace('콜레스테롤 ', '')) : 0;
          natrium = nutrient.match(/나트륨 [0-9.]*/) ? Number(nutrient.match(/나트륨 [0-9.]*/)[0].replace('나트륨 ', '')) : 0;
          sugars = nutrient.match(/당류 [0-9.]*/) ? Number(nutrient.match(/당류 [0-9.]*/)[0].replace('당류 ', '')) : 0;
          calcium = nutrient.match(/칼슘 [0-9.]*/) ? Number(nutrient.match(/칼슘 [0-9.]*/)[0].replace('칼슘 ', '')) : 0;
          iron = nutrient.match(/철 [0-9.]*/) ? Number(nutrient.match(/철 [0-9.]*/)[0].replace('철 ', '')) : 0;
        }
        // create chart
        const ctx = document.getElementById(chartId);
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['열량', '탄수화물', '단백질', '지방', '트랜스지방', '포화지방', '콜레스테롤', '나트륨', '당류', '칼슘', '철분'],            
            datasets: [
              {                
                data: [
                  kcal,
                  carbohydrate,
                  protein,
                  fat,
                  transFat,
                  saturatedFat,
                  cholesterol,
                  natrium,
                  sugars,
                  calcium,
                  iron,
                ],
                backgroundColor: [
                ]
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              }
            }
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
            // content: this.theFood.Plot,
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
  .product-container {
    display: flex;
    flex-direction: column;
    .product-title-section {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .product-name {
        color: $black;
        font-family: 'Do Hyeon', sans-serif;
        font-size: 4rem;
      }
      .product-label {
        color: $primary;
        span {
          &::after {
            content: '\00b7';
          }
        }
      }
    }
    .product-visual-section {
      display: flex;
      flex-direction: row;
      .product-img {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: lightyellow;
        .swiper {
          width: 20rem;
          height: 30rem;
          border-radius: 10px;
          display: flex;
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
            }
          }
          @include media-breakpoint-down(sm) {
            width: 15rem;
            height: 22.5rem;
          }
        }
      }      
      .product-chart {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        background: lightpink;
        canvas {
          width: 100%;
        }
      }
      @include media-breakpoint-down(xl) {
        flex-direction: column;
      }
    }    
    .product-spec-section {     
      background: lightcyan; 
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

    @include media-breakpoint-down(xl) {
      
    }
    @include media-breakpoint-down(lg) {
      
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
