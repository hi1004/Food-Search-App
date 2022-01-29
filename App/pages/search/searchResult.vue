<template>
  <div>
    <!-- <HeadLine /> -->
    <!-- <Search /> -->
    <FoodList />
  </div>
</template>

<script>
  // import HeadLine from '~/components/Search/HeadLine';
  import { mapState } from 'vuex';

  // import Search from '~/components/Search/Search';
  import FoodList from '~/components/Search/FoodList';


  export default {
    components: {
      // Search,
      // HeadLine,
      FoodList,
    },
        computed: {
      ...mapState('food', ['foods']),
    },

   
  };
</script>

<style lang="scss" scoped></style>
