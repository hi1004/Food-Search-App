<template>
  <div>
    <Banner />
    <HeadLine />
    <Totop />
  </div>
</template>

<script>
  import Totop from '~/components/Totop';
  import Banner from '~/components/Home/Banner';
  import HeadLine from '~/components/Search/HeadLine'
  export default {
    components: {
      Totop,
      Banner,
      HeadLine,
    },

  }
</script>

<style lang="scss" scoped>

</style>
