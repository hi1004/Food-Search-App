<template>
  <footer>
    <Logo />
    <div class="copyright">
      &copy;COPYRIGHT {{ new Date().getFullYear() }}. PROJECT. ALL RIGHTS RESERVED.
    </div>
  </footer>
</template>

<script>
  import Logo from '~/components/Logo';

  export default {
    components: {
      Logo,
    },
  };
</script>

<style lang="scss" scoped>
  footer {
    padding: 70px 0;
    text-align: center;
    opacity: 0.3;
    font-family: "Oswald",sans-serif;
    .logo {
      display: block;
      margin-bottom: 4px;
    }
  }
</style>
