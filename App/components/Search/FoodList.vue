<template>
  <div class="container">
    <div :class="{ 'no-result': !foods.length }" class="inner">
      <Loader v-if="loading" />
      <div v-if="message" class="message">
        {{ message }}
      </div>
      <div v-else class="foods">
        <FoodItem v-for="food in foods" :key="food.prdlstReportNo" :food="food" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Loader from '~/components/Loader';
  import FoodItem from '~/components/Search/FoodItem';
  export default {
    components: {
      FoodItem,
      Loader,
    },
    // mounted() {
    //   console.log(this.foods);
    // },
    computed: {
      ...mapState('food', ['foods', 'loading', 'message']),
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 30px;
    .inner {
      background-color: $gray-200;
      padding: 10px 0;
      border-radius: 4px;
      text-align: center;
      &.no-result {
        padding: 70px 0;
      }
    }
    .message {
      color: $gray-400;
      font-size: 20px;
    }
    .foods {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
