<template>
  <div>
    <Banner />
    <AllergieInfo />
    <Guide />
    <HeadLine />
    <Totop />
  </div>
</template>

<script>
  import Totop from '~/components/Totop';
  import Banner from '~/components/Home/Banner';
  import HeadLine from '~/components/Home/HeadLine';
  import Guide from '../components/Home/Guide';
  import AllergieInfo from '../components/Home/AllergieInfo';
  export default {
    components: {
      Totop,
      Banner,
      AllergieInfo,
      Guide,
      HeadLine,
    },
    mounted() {
      this.$store.dispatch('cursor/mouse');
    },
  };
</script>

<style lang="scss" scoped></style>
