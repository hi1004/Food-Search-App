<template>
  <div class="container">
    <div id="signIn">
      <form>
        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email" />
          <small
            id="emailHelp"
            class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password" />
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
          type="submit"
          class="btn btn-primary">
          Sign In
        </button>
        <small
          id="registerHelp"
          class="form-text text-muted">Don't have an account? <a href="#"><router-link to="./signUp">Create Account!</router-link></a></small>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
  #signIn {
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
      }
    }
  }
</style>
