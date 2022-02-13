<template>
  <div>
    <Banner />
    <HeadLine />
    <Search />
    <Totop />
  </div>
</template>

<script>
  import Totop from '~/components/Totop';
  import Banner from '~/components/Home/Banner';
  import HeadLine from '~/components/Search/HeadLine'
  import Search from '~/components/Search/Search';
  export default {
    components: {
      Totop,
      Banner,
      HeadLine,
      Search
    },

  }
</script>

<style lang="scss" scoped>

</style>
