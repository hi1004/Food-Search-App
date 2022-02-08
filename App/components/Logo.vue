<template>
  <NuxtLink
    to="/"
    class="logo">
    <img
      src="~/assets/images/logo.png"
      alt="logo" />
    안전한식탁
  </NuxtLink>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo {
  font-size: 20px;
  color: $black;
  text-decoration: none;
  font-family: "Do Hyeon", sans-serif;
      font-size: 1.5em;
    font-weight: 600;
    color: $primary;
 
  img {
    width: 30px;
  }
}
</style>