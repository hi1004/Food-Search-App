<template>
  <div>
    <Search />
    <FoodList />
    <toTop />
  </div>
</template>

<script>
  import Search from '~/components/Search/Search';
  import FoodList from '~/components/Search/FoodList';
  import toTop from '~/components/toTop';

  export default {
    components: {
      Search,
      FoodList,
      toTop,
    },
  };
</script>

<style lang="scss" scoped>
 
</style>
