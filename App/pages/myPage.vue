<template>
  <div>
    <h1>Hello, Happy World!</h1>
  </div>
</template>

<script>
  export default {
    middleware({ store, redirect }) {
      if (!store.state.signIn.isAuthorized) {
        if (typeof window !== 'undefined') {
          alert("로그인부터 하세요 도라에몽아");
        }        
        return redirect("/signIn");
      }
    }
  }
</script>
<style></style>
