<template>
  <div>
    <HeadLine />
    <Search />
  </div>
</template>

<script>
  import HeadLine from '~/components/Search/HeadLine';
  import Search from '~/components/Search/Search';

  export default {
    components: {
      Search,
      HeadLine,
    },
     created() {
      this.$store.commit('search/resetFood')
    }
  };
</script>

