<template>
  <div class="container">
    <div class="inner">
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <div class="foods">
        <FoodItem
          v-for="food in foods"
          :key="food.rnum"
          :food="food" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FoodItem from '~/components/FoodItem';
export default {
  components: {
    FoodItem
  },
  // mounted() {
  //   console.log(this.foods);
  // },
  computed: {
     ...mapState('food', [
       'foods',
       'message'
     ])
  }
}
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