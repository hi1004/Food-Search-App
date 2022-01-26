<template>
  <div class="container">
    <div class="inner">
      <FoodItem
        v-for="food in foods"
        :key="food.rnum"
        :food="food" />
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
       'foods'
     ])
  }
}
</script>

<style>
  .inner {
    width: 500px;
    height: 500px;
    background: red;
  }
</style>