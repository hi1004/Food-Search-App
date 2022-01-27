<template>
  <NuxtLink
    :to="`/food/${food.prdlstReportNo}`"
    :style="{ backgroundImage: `url(${food.imgurl1})` }"
    class="food">
    <Loader
      v-if="imageLoading"
      :size="1.5"
      absolute />
    <div class="info">
      <div class="product">
        {{ food.productGb }}
      </div>
      <div class="name">
        {{ food.prdlstNm }}
      </div>
    </div>
  </NuxtLink>
</template>

<script>
  import Loader from '~/components/Loader';


  export default {
    components: {
      Loader,
    },
    props: {
      food: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        imageLoading: true,
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      async init() {
        const img = this.food.imgurl1;
        if (!img || img === 'N/A') {
          this.imageLoading = false;
        } else {
          await this.$loadImage(img);
          this.imageLoading = false;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .food {
    $width: 200px;
    width: $width;
    height: $width * calc(3 / 2);
    margin: 10px;
    border-radius: 4px;
    background-color: $gray-400;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;
    &:hover::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 6px solid $primary;
    }
    .info {
      background-color: rgba($black, 0.3);
      backdrop-filter: blur(10px);
      width: 100%;
      padding: 14px;
      font-size: 14px;
      text-align: center;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      bottom: 0;
      .product {
        color: $primary;
      }
      .name {
        color: $white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
