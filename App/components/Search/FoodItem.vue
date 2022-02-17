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
    <client-only>
      <img
        src="~/assets/images/allergy/allergy-safe.png"
        class="mark"
        v-if="this.isSafe && isAuthorized" />
      <img
        src="~/assets/images/allergy/allergy-danger.png"
        class="mark"
        v-if="this.isDanger && isAuthorized" />
      <img
        src="~/assets/images/allergy/allergy-unknown.png"
        class="mark"
        v-if="this.isUnknown && isAuthorized" />
    </client-only>    
  </NuxtLink>
</template>

<script>
  import Loader from '~/components/Loader';
  import { mapState } from 'vuex';

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
        isDanger: false,
        isUnknown: false,
        isSafe: false,
      };
    },
    created() {
      Object.entries(this.allergiesInfo).forEach(([key, value]) => {
        if (value === true) {
          this.checkedAllergies.push(this.allergies[key]);
        }
      });
      if (this.food.allergy === '알수없음') {
        this.message = '정보제공 안함';
        this.isUnknown = true;
      } else {
        this.checkedAllergies.forEach(al => {
          if (this.food.allergy.includes(al)) {
            this.message.push(al);
          }
        });
        if (this.message.length > 0) {
          this.isDanger = true;
        } else {
          this.isSafe = true;
        }
      }
    },
    computed: {
      ...mapState('signIn', ['allergiesInfo', 'isAuthorized']),
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
      width: 3rem;
      height: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      background-color: transparent;
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
