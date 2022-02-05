<template>
  <div id="signIn">
    <form>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          @keyup.enter="signIn"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model.trim="email" />
        <small
          id="emailHelp"
          class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          @keyup.enter="signIn"
          id="inputPassword"
          placeholder="Password"
          v-model.trim="password" />
      </div>
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="Check1" />
        <label
          class="form-check-label"
          for="Check1">Remember me</label>
      </div>
      <button
        @click="signIn"
        type="button"
        class="btn btn-primary">
        Sign In
      </button>
      <small
        id="registerHelp"
        class="form-text text-muted">Don't have an account? <NuxtLink to="./signUp">Create Account!</NuxtLink></small>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      username: '',
      email : '',
      password : '',
    }
  },
  computed: {
    ...mapState('signUp',['userName'])
  },
  methods: {
    signIn() {
       this.$store.dispatch('signIn/userLogin', {
          username: this.userName,
          email: this.email,
          password: this.password,
        });
      
    }
  }
}
</script>

<style lang="scss">
  #signIn {
    width: 90%;
    max-width: 540px;
    margin: 0 auto;
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 0px 5px gray;
    form {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 10px 0;
      .form-group {
        margin: 10px 0;
        label {
          font-weight: bold;
        }
      }
    }
  }
</style>
