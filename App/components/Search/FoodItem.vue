<template>
  <NuxtLink
    :to="`/search/${food.prdlstReportNo}`"
    class="food-box">
    <div
      class="food"
      :style="{ backgroundImage: `url(${food.imgurl1})` }">
      <Loader
        v-if="imageLoading"
        :size="1.5"
        absolute />
    </div>
    <div class="info">
      <div class="product">
        {{ food.prdkind }}
      </div>
      <div class="name">
        {{ food.prdlstNm }}
      </div>
    </div>
    <FontAwesomeIcon
      class="mark safe"
      v-if="this.isSafe"
      icon="fa-solid fa-circle-check" />
    <FontAwesomeIcon
      class="mark"
      v-if="this.isAllergy"
      icon="fa-solid fa-triangle-exclamation" />
    <FontAwesomeIcon
      class="mark unknown"
      v-if="this.unknownAllergy"
      icon="fa-solid fa-circle-question" />
  </NuxtLink>
</template>

<script>
  import Loader from '~/components/Loader';
  import { mapState } from 'vuex';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faTriangleExclamation, faCircleQuestion, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  library.add(faTriangleExclamation, faCircleQuestion, faCircleCheck);

  export default {
    components: {
      Loader,
      FontAwesomeIcon,
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
        message: [],
        isAllergy: false,
        unknownAllergy: false,
        isSafe: false,
      };
    },
    created() {
      Object.entries(this.allergiesInfo).forEach(([key, value]) => {
        if (value === true) {
          this.checkedAllergies.push(this.allergies[key]);
        }
      });
      console.log(this.checkedAllergies);
      if (this.food.allergy === '알수없음') {
        this.message = '정보제공 안함';
        this.unknownAllergy = true;
      } else {
        this.checkedAllergies.forEach(al => {
          if (this.food.allergy.includes(al)) {
            this.message.push(al);
          }
        });
        if (this.message.length > 0) {
          this.isAllergy = true;
        } else {
          this.isSafe = true;
        }
      }
    },
    computed: {
      ...mapState('signIn', ['allergiesInfo']),
      ...mapState('search', ['foodAllergies']),
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
  .food-box {
    $width: 200px;
    width: $width;
    height: $width * calc(3 / 2);
    margin: 10px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    .mark {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 3rem;
      background-color: transparent;
      color: $danger;
      &.unknown {
        color: $warning;
      }
      &.safe {
        color: $success;
      }
    }
    &:hover::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom: 6px solid $primary;
    }
    &:hover .food {
      transform: scale(1.1);
      opacity: 1;
    }
    &:hover .food {
      transform: scale(1.1);
    }
    .food {
      $width: 200px;
      width: $width;
      height: $width * calc(3 / 2);
      background-color: $gray-400;
      background-size: cover;
      background-position: center;
      position: relative;
      transition-duration: 0.4s;
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
        color: #fbff00;
      }
      .name {
        color: $white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 15px;
      }
    }
   
  }
</style>
<style lang="scss">
 
</style>
