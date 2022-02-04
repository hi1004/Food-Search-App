<template>
  <div>
    <h1 v-if="!isAuth">
      로그인 안됐음!
    </h1>
    <h1 v-if="isAuth">
      로그인 됐음!
    </h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      isAuth: false
    }
  },
  beforeCreate() {
    axios.get('/api/user/user')
    .then(() => {
      this.isAuth = true;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>

<style>

</style>