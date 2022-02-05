<template>
  <div>
    <p v-if="!isAuthorized">
      로그인 안됐음!
      {{ isAuthorized }}
    </p>
    <p v-if="isAuthorized">
      로그인 됐음!
      {{ isAuthorized }}
    </p>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {

    computed: {
      ...mapState('signIn', ['isAuthorized']),
    },

  };
</script>

<style></style>
