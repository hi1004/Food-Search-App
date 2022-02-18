<template>
  <div>
    <Banner />
    <Guide />
    <HeadLine />
    <Totop />
  </div>
</template>

<script>
  import Totop from '~/components/Totop';
  import Banner from '~/components/Home/Banner';
  import HeadLine from '~/components/Home/HeadLine'
  import Guide from '../components/Home/Guide.vue';
  export default {
    components: {
      Totop,
      Banner,
      HeadLine,
      Guide,
    },
    mounted() {
      this.$store.dispatch('cursor/mouse');
    },

  }
</script>

<style lang="scss" scoped>

</style>
