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
    width: 2rem;
    height: 2rem;
    //background: white;
    border: 3px solid white;
    border-radius: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transform-origin: center;
    mix-blend-mode: difference;
    z-index: 9999;
  }
  .link-grow {
    background: white;
  }
   @include media-breakpoint-down(sm) {
     body {
       cursor: default;
     }
     .cursor {
    display: none;
  }
   }
</style>
