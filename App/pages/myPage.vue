<template>
  <div>
    <h1 v-if="!isAuthorized">
      로그인 안됐음!
    </h1>
    <h1 v-if="isAuthorized">
      로그인 됐음!
    </h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState('signIn',['isAuthorized'])
    },
    created() {
      this.$store.dispatch('signIn/setAuthorized');
    }
}
</script>

<style>

</style>