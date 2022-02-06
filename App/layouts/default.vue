<template>
  <div>
    <Header />
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
    },
    beforeCreate() {
      this.$store.dispatch('signIn/setAuthorized')
    }
  };
</script>
