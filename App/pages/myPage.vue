<template>
  <div>
    <h1>Hello, Happy World!</h1>
  </div>
</template>

<script>
  export default {
    beforeResolve (to, from, next) {
      if (this.$store.state.signIn.isAuthorized) {
        next()
      } else {
        next(false);
      }
    }
  }
</script>
<style></style>
