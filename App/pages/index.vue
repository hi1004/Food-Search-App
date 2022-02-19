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
<<<<<<< HEAD
  import HeadLine from '~/components/Home/HeadLine';
  import Guide from '../components/Home/Guide';
  import AllergieInfo from '../components/Home/AllergieInfo';
=======
  import HeadLine from '~/components/Home/HeadLine'
  import Guide from '../components/Home/Guide.vue';  

>>>>>>> ba990b4ac13b645da2c9661fc5bf7e3cd78b410a
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
<<<<<<< HEAD
  };
</script>

<style lang="scss" scoped></style>
=======
    methods: {      
    }
  }
</script>

<style lang="scss" scoped>
</style>
>>>>>>> ba990b4ac13b645da2c9661fc5bf7e3cd78b410a
