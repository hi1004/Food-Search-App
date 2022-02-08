<template>
  <NuxtLink
    to="/"
    class="logo">
    <span>FoodSearch</span>.com
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
  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>