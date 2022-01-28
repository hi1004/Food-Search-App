<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <NuxtLink :to="nav.href" active-class="active" :class="{ active: isMatch(nav.path) }" class="nav-link" exact>
          {{ nav.name }}
        </NuxtLink>
      </div>
    </div>
    <div class="user" @click="toggleSignIn">
      <img />
    </div>
    <transition name="slide">
      <div v-if="showSignIn" id="signIn">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" class="btn btn-primary">Sign In</button>
          <small id="registerHelp" class="form-text text-muted"
            >Don't have an account? <a href="#">Create Account!</a></small
          >
        </form>
      </div>
    </transition>
  </header>
</template>

<script>
  import Logo from '~/components/Logo';
  // import index from '~/store/index';
  export default {
    components: {
      Logo,
    },
    data() {
      return {
        showSignIn: false,
        navigations: [
          {
            name: 'Home',
            href: '/',
          },
          {
            name: 'Search',
            href: '/search/search',
          },
          {
            name: 'SearchResult',
            href: '/search/searchResult',
          },
          {
            name: 'My Page',
            href: '/myPage',
          },
        ],
      };
    },
    methods: {
      isMatch(path) {
        if (!path) return false;
        return path.test(this.$route.fullPath);
      },
      toggleSignIn() {
        this.showSignIn = this.showSignIn ? false : true;
      },
    },
  };
</script>

<style lang="scss" scoped>
  header {
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 40px;
    position: relative;
    .logo {
      margin-right: 40px;
    }
    .user {
      width: 40px;
      height: 40px;
      padding: 6px;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: $gray-200;
      cursor: pointer;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      margin: auto;
      transition: 0.4s;
      &:hover {
        background-color: darken($gray-200, 10%);
      }
      img {
        width: 100%;
      }
    }
    #signIn {
      position: absolute;
      width: 300px;
      height: 400px;
      top: 70px;
      right: 10px;
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
    .slide-enter {
      transform: translateX(300px);
    }
    .slide-enter-active,
    .slide-leave-active {
      transition: 0.5s;
    }
    .slide-leave-to {
      transform: translateX(300px);
    }
    @include media-breakpoint-down(sm) {
      .nav {
        display: none;
      }
    }
  }
</style>
