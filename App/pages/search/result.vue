<template>
  <div>
    <Search :mt="100" />
    <FoodList />
    <Totop />
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
 
</style>
