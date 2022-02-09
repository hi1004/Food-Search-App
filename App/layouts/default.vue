<template>
  <div>
    <Header />
    <div class="margin"></div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/Header';
  import Footer from '~/components/Footer';
  export default {
    components: {
      Header,
      Footer,
    }
  };
</script>

<style lang="scss" scoped>
  .margin {
    margin-top: 70px;
  }
</style>
