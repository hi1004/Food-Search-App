<template>
  <div class="container">
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
      <div
        :style="{
          backgroundImage: `url(${requestDiffSizeImage(theFood.imgurl1)})`,
        }"
        class="image">
        <Loader
          v-if="imageLoading"
          absolute />
      </div>
      <div class="specs">
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

        <h3>바코드</h3>
        <div>
          <img
            src="~/assets/images/barcode.png"
            :alt="theFood.prdlstNm" />
          <span>{{ theFood.barcode }}</span>
        </div>

        <div>
          <h3>유형의상태</h3>
          {{ theFood.prdkindstate }}
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
          <h3>판매</h3>
          {{ theFood.seller }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Loader from '~/components/Loader';

  export default {
    components: {
      Loader,
    },
    // ssr이 실행하기 전 동작
    async asyncData({ store, params }) {
      await store.dispatch('food/searchFoodWithId', {
        id: params.id,
      });
      return {
        imageLoading: true,
      };
    },

    computed: {
      ...mapState('food', ['loading', 'theFood']),
    },
    methods: {
      requestDiffSizeImage(url) {
        // 잘못된 URL(Poster)인 경우.
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
  .container {
    padding-top: 40px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  .skeletons {
    display: flex;
    .image {
      flex-shrink: 0;
      width: 500px;
      height: calc(500px * 3 / 2);
      margin-right: 70px;
    }
    .specs {
      flex-grow: 1;
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
    .image {
      width: 500px;
      height: calc(500px * 3 / 2);
      margin-right: 70px;
      border-radius: 10px;
      background-color: $gray-200;
      background-size: cover;
      background-position: center;
      position: relative;
      flex-shrink: 0;
    }
    .specs {
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
    @include media-breakpoint-down(xl) {
      .image {
        width: 300px;
        height: calc(300px * 3 / 2);
        margin-right: 40px;
      }
    }
    @include media-breakpoint-down(lg) {
      display: block;
      .image {
        // margin-bottom: 40px;
        margin: 0 auto 40px;
      }
    }
    @include media-breakpoint-down(md) {
      .specs {
        .title {
          font-size: 50px;
        }
      }
    }
  }
</style>
