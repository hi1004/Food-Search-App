<template>
  <div>
    <div class="search-section">
      <Search />
      <FoodList />
      <Totop />
    </div>
  </div>
</template>

<script>
  import Search from '~/components/Search/Search';
  import FoodList from '~/components/Search/FoodList';
  import Totop from '~/components/Totop';

  export default {
    components: {
      Search,
      FoodList,
      Totop,
    },
  };
</script>

<style lang="scss" scoped>
  .search-section {
    min-height: 80vh;
  }
</style>
