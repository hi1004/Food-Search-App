<template>
  <div class="box">
    {{ food.prdlstNm
    }}
  </div>
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

<style>
.box {
  width: 100px;
  height: 100px;
  background: green;
}
</style>