<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <NuxtLink
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path) }"
          class="nav-link"
          exact>
          {{ nav.name }}
        </NuxtLink>
      </div>
    </div>
    <div
      class="user"
      @click="toggleSignIn">
      <img />
    </div>
    <transition name="slide">
      <div
        v-if="showSignIn"
        id="signIn">
        <form class="container">
          <div class="form-group">
            <h1>LogIn</h1>
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
          <div class="actions">
            <a
              href="#"
              class="btn">회원가입</a>
            <a href="#">아이디 찾기</a>
            <a href="#">비밀번호 찾기</a>
          </div>
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
          // {
          //   name: 'SearchResult',
          //   href: '/search/searchResult',
          //   path: /^\/search^\/searchResult/
          // },
          {
            name: 'About',
            href: '/about',
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
      position: fixed;
      width: calc(100% - 20px);
      height: calc(100% - 80px);
      z-index: 1;
      top: 70px;
      right: 10px;
      background-color: rgba(240, 240, 240, 0.85);
      border-radius: 10px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0px 0px 5px gray;
      .container {
        background-color: #f6f5f0;
        padding: 30px 22px;
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
      }

      form {
        width: 500px;
        // height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        input[type='text'] {
          outline: none;
          font-size: 14px;
          padding: 15px;
          box-sizing: border-box;
        }
        .actions {
          display: flex;
          border-top: 1px solid #ddd;
          a {
            flex-grow: 1;
            flex-basis: 0;
            text-align: center;
            padding: 20px;
            color: #555;
            font-size: 14px;
            border-right: 1px solid #ddd;
            text-decoration: none;
            &:last-child {
              border-right: 0;
            }
          }
        }
      }
    }
    .slide-enter {
      transform: translateX(100%) scale(0);
    }
    .slide-enter-active,
    .slide-leave-active {
      transition: 0.6s;
    }
    .slide-leave-to {
      transform: translateX(100%) scale(0);
    }
    @include media-breakpoint-down(xxl) {
      .form {
        width: 600px;
      }
    }
      @include media-breakpoint-down(lg) {
      .form {
        width: 100%;
      }
    }
    @include media-breakpoint-down(sm) {
      .nav {
        display: none;
      }
    }
  }
</style>
