<template>
  <div>
    <HeadLine />
    <Search />
    <FoodList />
  </div>
</template>

<script>
import HeadLine from '~/components/HeadLine';
import  Search from '~/components/Search';
import FoodList from '~/components/FoodList';

export default {
  components: {
    Search,
    HeadLine,
    FoodList
  },
   created() {
    this.$store.commit('food/resetFood')
  }
};
</script>

<style lang="scss" scoped>

</style>

