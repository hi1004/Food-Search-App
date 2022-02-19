<template>
  <div>
    <Banner />
    <Guide />
    <HeadLine />
    <Totop />
    <button 
      @click="toSearchSec"
      type="button"
      class="toSearchBtn">
      바로 검색하기!
    </button>
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
    methods: {
      toSearchSec() {
        const searchBar = document.querySelector('.home-search-input');
        console.log(searchBar);
        searchBar.focus();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toSearchBtn {
    position: fixed;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }
</style>
