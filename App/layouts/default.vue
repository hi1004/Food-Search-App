<template>
  <div>
    <Header />
    <div class="cursor"></div>   
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/Header';
  import Footer from '~/components/Footer';
  import { mapState } from 'vuex';

  
  export default {
    components: {
      Header,
      Footer,
    },
    created() {
      this.$store.dispatch('signIn/setAuthorized');
    }, 
    mounted() {
      this.$store.dispatch('cursor/mouse');
    },
    computed: {
      ...mapState('default', ['links']),
    },
   
  };
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    // cursor: none;
  }
  body {
  line-height: 1.4;
  font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  overflow-x: hidden;
  }
   .cursor {
    width: 1.8rem;
    height: 1.8rem;
    //background: white;
    border: 5px solid white;
    border-radius: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    box-shadow: 1px 2px 1px black;
    transform-origin: center;
    mix-blend-mode: difference;
    z-index: 9999;
  }
  .link-grow {
    background: white;
  }
   @include media-breakpoint-down(md) {
     body {
       cursor: default;
     }
     .cursor {
    display: none;
  }
   }
</style>
