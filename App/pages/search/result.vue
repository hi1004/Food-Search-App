<template>
  <div>
    <Search />
    <FoodList />
  </div>
</template>

<script>
  import Search from '~/components/Search/Search';
  import FoodList from '~/components/Search/FoodList';

  export default {
    components: {
      Search,
      FoodList,
    },

  };
</script>

<style lang="scss" scoped></style>
