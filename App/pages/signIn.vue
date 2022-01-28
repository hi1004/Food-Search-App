<template>
  <div class="container">
    <div id="signIn">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email" />
          <small
            id="emailHelp"
            class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password" />
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1" />
          <label
            class="form-check-label"
            for="exampleCheck1">Remember me</label>
        </div>
        <button
          type="submit"
          class="btn btn-primary">
          Sign In
        </button>
        <small
          id="registerHelp"
          class="form-text text-muted">Don't have an account? <a href="#">Create Account!</a></small>
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
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
</style>
