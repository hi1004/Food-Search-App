<template>
  <NuxtLink
    to="/"
    class="logo">
    <p>안전한식탁</p>
  </NuxtLink>
</template>

<script>
  export default {
    methods: {
      
    }
  };
</script>

<style lang="scss" scoped>
  .logo {
    font-size: 20px;
    height: 40px;
    color: $black;
    text-decoration: none;
    p {
      font-family: 'Jua', sans-serif;
      font-size: 1.5rem;
      margin: 0;
      color: $white;
    }
  }
</style>
