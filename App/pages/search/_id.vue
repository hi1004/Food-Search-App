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
        <client-only>
          <div
            v-if="isAuthorized"
            class="product-allergy">
            <span
              v-if="isSafe"
              class="product-allergy-msg"><span class="safe"><FontAwesomeIcon icon="fa-circle-check" /></span> 안전한 식품입니다 :)</span>
            <span
              v-if="isUnknown"
              class="product-allergy-msg"><span class="unknown"><FontAwesomeIcon icon="fa-circle-question" /></span> 알러지 정보가 없다요 :(</span>
            <span
              v-if="isDanger"
              class="product-allergy-msg"><span class="danger"><FontAwesomeIcon icon="fa-triangle-exclamation" /></span> 위험! <span class="warning">{{ this.allergyArr }}</span> 포함!</span>
          </div>
          <div
            v-else
            class="product-allergy">
            <span class="product-allergy-msg">알러지 체크를 원하시면 <span class="login-info">로그인</span>해주세요!</span>
          </div>
        </client-only>
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
              class="swiper-button-prev swiper-button"
              slot="button-prev"></div>
            <div
              class="swiper-button-next swiper-button"
              slot="button-next"></div>
          </Swiper>
        </div>
        <!-- Chart section -->
        <div class="product-chart">
          <canvas id="nutrient-chart">
          </canvas>
          <h1 class="unknownInfoMsg">
            영양 정보가 없다요 :(
          </h1>
        </div>
      </div>      
      <!-- Product specification section -->
      <div class="product-spec-section">
        <div class="nutrient">
          <h3>영양성분</h3>
          {{ theFood.nutrient }}
        </div>
        <div>
          <h3>식품분류</h3>
          {{ theFood.prdkind }}
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
    <Totop />
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import Loader from '~/components/Loader';
  import Totop from '~/components/Totop';

  import Chart from 'chart.js/auto';

  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';  
  import 'swiper/css/swiper.css';

  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faCircleCheck, faTriangleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

  library.add(faCircleCheck, faTriangleExclamation, faCircleQuestion);

  export default {
    components: {
      Loader,
      Swiper,
      SwiperSlide,
      FontAwesomeIcon,
      Totop,
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
        checkedAllergies: [],
        allergies: {
          egg: '난류',
          milk: '우유',
          buckwheat: '메밀',
          peanut: '땅콩',
          bean: '대두',
          wheat: '밀',
          mackerel: '고등어',
          crab: '게',
          shrimp: '새우',
          pork: '돼지',
          peach: '복숭아',
          tomato: '토마토',
          sulfite: '아황산염',
          walnut: '호두',
          chicken: '닭고기',
          beef: '쇠고기',
          squid: '오징어',
          shellfish: '조개류',
          pineNut: '잣',
        },
        allergyArr: [],
        isDanger: false,
        isUnknown: false,
        isSafe: false,
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
      ...mapState('signIn', ['isAuthorized', 'allergiesInfo']),
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
        let carbohydrate = Math.floor(Math.random() * 101);
        let protein = Math.floor(Math.random() * 101);
        let fat = Math.floor(Math.random() * 101);
        let transFat = Math.floor(Math.random() * 101);
        let saturatedFat = Math.floor(Math.random() * 101);
        let cholesterol = Math.floor(Math.random() * 101);
        let sugars = Math.floor(Math.random() * 101);
        let calcium = Math.floor(Math.random() * 101);
        let iron = Math.floor(Math.random() * 101);
        // parsing nutrient data if nutrient data is not unknown
        const nutrient = this.theFood.nutrient;
        if (nutrient != '알수없음' && nutrient != '알 수 없음' && nutrient) {        
          carbohydrate = nutrient.match(/탄수화물\s{0,}[0-9.]*/) ? Number(nutrient.match(/탄수화물\s{0,}[0-9.]*/)[0].replace('탄수화물', '')) : 0;
          protein = nutrient.match(/단백질\s{0,}[0-9.]*/) ? Number(nutrient.match(/단백질\s{0,}[0-9.]*/)[0].replace('단백질', '')) : 0;
          fat = nutrient.match(/지방\s{0,}[0-9.]*/) ? Number(nutrient.match(/지방\s{0,}[0-9.]*/)[0].replace('지방', '')) : 0;
          transFat = nutrient.match(/트랜스지방\s{0,}[0-9.]*/) ? Number(nutrient.match(/트랜스지방\s{0,}[0-9.]*/)[0].replace('트랜스지방', '')) : 0;
          saturatedFat = nutrient.match(/포화지방\s{0,}[0-9.]*/) ? Number(nutrient.match(/포화지방\s{0,}[0-9.]*/)[0].replace('포화지방', '')) : 0;
          cholesterol = nutrient.match(/콜레스테롤\s{0,}[0-9.]*/) ? Number(nutrient.match(/콜레스테롤\s{0,}[0-9.]*/)[0].replace('콜레스테롤', '')) : 0;
          sugars = nutrient.match(/당류\s{0,}[0-9.]*/) ? Number(nutrient.match(/당류\s{0,}[0-9.]*/)[0].replace('당류', '')) : 0;
          calcium = nutrient.match(/칼슘\s{0,}[0-9.]*/) ? Number(nutrient.match(/칼슘\s{0,}[0-9.]*/)[0].replace('칼슘', '')) : 0;
          iron = nutrient.match(/철\s{0,}[0-9.]*/) ? Number(nutrient.match(/철\s{0,}[0-9.]*/)[0].replace('철', '')) : 0;
        } else {
          document.querySelector('.product-chart').classList.add('unknown');
        }
        // create chart
        const ctx = document.getElementById(chartId);
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['탄수화물', '단백질', '지방', '트랜스지방', '포화지방', '콜레스테롤', '당류', '칼슘', '철분'],            
            datasets: [
              {                
                data: [
                  carbohydrate,
                  protein,
                  fat,
                  transFat,
                  saturatedFat,
                  cholesterol,
                  sugars,
                  calcium,
                  iron,
                ],
                backgroundColor: [
                  'rgba(89, 199, 235, 0.5)',
                  'rgba(224, 96, 126, 0.5)',
                  'rgba(11, 144, 134, 0.5)',
                  'rgba(254, 160, 144, 0.5)',
                  'rgba(62, 84, 150, 0.5)',
                  'rgba(239, 220, 96, 0.5)',
                  'rgba(142, 32, 67, 0.5)',
                  'rgba(154, 160, 167, 0.5)',
                  'rgba(7, 113, 135, 0.5)',
                ],
                borderColor: [
                  'rgb(89, 199, 235)',
                  'rgb(224, 96, 126)',
                  'rgb(11, 144, 134)',
                  'rgb(254, 160, 144)',
                  'rgb(62, 84, 150)',
                  'rgb(239, 220, 96)',
                  'rgb(142, 32, 67)',
                  'rgb(154, 160, 167)',
                  'rgb(7, 113, 135)',
                ]
              },
            ],
          },
          options: {
            scales: {
              x: {
                grid: {
                  display: false,
                }
              },
              y: {
                grid: {
                  display: false
                }
              },
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      },
    },
    mounted() {
      // create chart
      this.createChart('nutrient-chart');
      // set allergy check info
      Object.entries(this.allergiesInfo).forEach(([key, value]) => {
        if (value === true) {
          this.checkedAllergies.push(this.allergies[key]);
        }
      });
      console.log(this.checkedAllergies);
      if (this.theFood.allergy === '알수없음') {
        this.isUnknown = true;
      } else {
        this.checkedAllergies.forEach(al => {
          if (this.theFood.allergy.includes(al)) {
            this.allergyArr.push(al);
          }
        });
        if (this.allergyArr.length > 0) {
          this.isDanger = true;
        } else {
          this.isSafe = true;
        }
      }   
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
    padding: 100px 0 40px;
    .product-title-section {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 3rem 0 2rem;
      font-family: 'Do Hyeon', sans-serif;
      line-height: 1;
      .product-name {
        color: $black;        
        font-size: 4rem;
      }
      .product-allergy {
        font-size: 1.1rem;
        margin-top: 20px;
        .login-info {
          color: red;
        }
        .warning {
          color: red;
        }
        .safe {
          color: green;
        }
        .unknown {
          color: #b8b810;
        }
        .danger {
          color: red;
        }
      }
    }
    .product-visual-section {
      display: flex;
      flex-direction: row;
      padding: 5rem 0;
      border-top: 1px solid lightgray;
      border-bottom: 1px solid lightgray;
      @include media-breakpoint-down(sm) {
        padding: 2rem 0;
      }
      .product-img {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 3rem;
        margin: 0 !important;
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
            margin: 0;
            margin-bottom: 2rem;
          }
        }
      }      
      .product-chart {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .unknownInfoMsg {
          display: none;
          font-family: 'Do Hyeon', sans-serif;
          font-size: 3rem;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        #nutrient-chart {
          width: 100% !important;           
        }
        &.unknown {
          .unknownInfoMsg{
            display: block;            
            @include media-breakpoint-down(xl) {
              font-size: 2rem;
            }
            @include media-breakpoint-down(sm) {
              font-size: 1.2rem;
            }
          }
          #nutrient-chart {
            filter: blur(0.3rem);
          }
        }
        
      }
      @include media-breakpoint-down(xl) {
        flex-direction: column;
      }
    }    
    .product-spec-section {  
      padding: 5rem 0;
      @include media-breakpoint-down(sm) {
        padding: 2rem 0;
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

<style lang="scss">
   .swiper-button {
    width: 50px;
    height: 50px;
    background: $primary;
    border-radius: 50%;
    opacity: 0.8;
    &::after {
      font-size: 30px;
      font-weight: bolder;
      color: #fff;
    }
     @include media-breakpoint-down(sm) {
       display: flex;
       justify-content: center;
       align-items: center;
     }
  }
  .swiper-pagination-bullet {
    background: $primary;
  }
</style>
