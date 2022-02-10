<template>
  <NuxtLink
    to="/"
    class="logo">
    <!-- <img
      src="~/assets/images/logo.png"
      alt="logo" /> -->
    <p>안전한식탁</p>
  </NuxtLink>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .logo {
    font-size: 20px;
    height: 40px;
    color: $black;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    p {
      font-family: 'Jua', sans-serif;
      font-size: 1.5rem;
      margin: 0;
      color: $white;
    }
  }
</style>
