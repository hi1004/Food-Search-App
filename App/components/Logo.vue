<template>
  <NuxtLink
    to="/"
    class="logo">
    <img
      src="~/assets/images/logo.png"
      alt="logo" />
    <h1><span>안전</span>한식탁</h1>
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
    color: $primary;
  display: flex;
  h1 {
      font-family: "Do Hyeon", sans-serif;
      font-size: 1.5em;
    font-weight: 600;
    span {
      color: green;
    }
  }
  img {
    width: 30px;
  }
}
</style>