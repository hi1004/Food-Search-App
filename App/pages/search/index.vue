<template>
  <div>
    <HeadLine />
    <Search />
    <!-- <FoodList /> -->
  </div>
</template>

<script>
  import HeadLine from '~/components/Search/HeadLine';
  import Search from '~/components/Search/Search';
  // import FoodList from '~/components/Search/FoodList';

  export default {
    components: {
      Search,
      HeadLine,
      // FoodList
    },
     created() {
      this.$store.commit('search/resetFood')
    }
  };
</script>

<style lang="scss" scoped></style>
