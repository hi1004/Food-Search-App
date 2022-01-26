<template>
  <NuxtLink
    :to="`/food/${food.prdlstNm}`"
    :style="{ backgroundImage: `url(${food.imgurl2})` }"
    class="food">
    <div class="info">
      <div class="product">
        {{ food.productGb }}
      </div>
      <div class="name">
        {{ food.prdlstNm }}
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
    props: {
    food: {
      type: Object,
      default: () => ({})
    }
  },
}
</script>

<style lang="scss" scoped>
.food {
  $width: 200px;
  width: $width;
  height: $width * calc(3 / 2);
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid $primary;
  }
  .info {
    background-color: rgba($black, .3);
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    .product {
      color: $primary;
    }
    .name {
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>