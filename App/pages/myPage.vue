<template>
  <div>
    <h1>Hello, Happy World!</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState('signIn', ['isAuthorized']),
    },
    beforeCreate() {
      if(!this.$store.state.signIn.isAuthorized && typeof window !== 'undefined') {
        alert("로그인 안됐음!")
        this.$router.go(-1);
      }      
    }
  };
</script>

<style></style>
