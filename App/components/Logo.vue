<template>
  <NuxtLink
    to="/"
    class="logo">
    <img
      src="~/assets/images/logo.png"
      alt="logo" />
    <p>안전한<span>식탁</span></p>
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
      font-size: 1.5em;
      font-weight: 600;
      margin: 0;
      color: $primary;
      span {
        color: green;
      }
    }
  }
</style>
