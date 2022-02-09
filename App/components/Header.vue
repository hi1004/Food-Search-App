<template>
  <header :class="{ 'header--hidden': !showNavbar }">
    <div class="container">
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

      <h4
        class="username"
        v-if="isAuthorized">
        {{ username }}
      </h4>
      <ul class="user">
        <FontAwesomeIcon
          class="iconBtn"
          icon="circle-user" />
        <ul class="sub-menu">
          <li>
            <client-only>
              <div v-if="!isAuthorized">
                <a
                  href="javascript:void(0)"
                  @click="toSignIn">
                  <FontAwesomeIcon
                    class="iconBtn"
                    icon="sign-in-alt" />
                  로그인
                </a>
              </div>
            </client-only>
          </li>
          <li>
            <client-only>
              <div v-if="isAuthorized">
                <h4 class="welcome">
                  {{ username }}
                </h4>
                <a
                  href="javascript:void(0)"
                  @click="signOut">
                  <FontAwesomeIcon
                    class="iconBtn"
                    icon="sign-out-alt" />
                  로그아웃
                </a>
              </div>
            </client-only>
          </li>
          <li>
            <client-only>
              <div v-if="!isAuthorized">
                <a
                  href="javascript:void(0)"
                  @click="toSignUp">
                  <FontAwesomeIcon
                    class="iconBtn"
                    icon="user-plus" />
                  회원가입
                </a>
              </div>
            </client-only>
          </li>
        </ul>
      </ul>
      <!-- <client-only>
        <div
          v-if="!isAuthorized"     
          class="user">
          Sign In
          <font-awesome-icon
            class="iconBtn"
            @click="toSignIn"
            :icon="signInIcon" />
        </div>
      </client-only>
      <client-only>
        <div
          v-if="isAuthorized"
          class="user">
          {{ username }}님 사랑해요
          <font-awesome-icon
            class="iconBtn"
            @click="signOut"
            :icon="signOutIcon" />
        </div>
      </client-only> -->
    </div>
  </header>
</template>

<script>
  import Logo from '~/components/Logo';
  import { mapState } from 'vuex';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faSignInAlt, faSignOutAlt, faCircleUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  library.add(faSignInAlt, faSignOutAlt, faCircleUser, faUserPlus);
  export default {
    components: {
      Logo,
      FontAwesomeIcon,
    },
    data() {
      return {
        navigations: [
          {
            name: 'Home',
            href: '/',
          },
          {
            name: 'Search',
            href: '/search/',
          },
          {
            name: 'My Page',
            href: '/myPage',
          },
        ],
        signInIcon: 'sign-in-alt',
        signOutIcon: 'sign-out-alt',
        showNavbar: true,
        lastScrollPosition: 0,
      };
    },
    computed: {
      ...mapState('signIn', ['isAuthorized', 'username']),
    },
    methods: {
      isMatch(path) {
        if (!path) return false;
        return path.test(this.$route.fullPath);
      },
      toSignIn() {
        this.$router.push('/signIn');
      },
      async signOut() {
        await this.$store.dispatch('signIn/userLogout');
        this.$router.push('/');
      },
      toSignUp() {
        this.$router.push('/signUp');
      },
      onScroll() {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) {
          return;
        }
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 70) {
          return;
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll);
    },
    Unmount() {
      window.removeEventListener('scroll', this.onScroll);
    },
  };
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 40px;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.8);
    top: 0;
    box-shadow: 0 2px 15px rgba(249, 81, 34, 0.5);
    z-index: 99;
    box-sizing: border-box;
    &.header--hidden {
      box-shadow: none;
      transform: translate3d(0, -100%, 0);
    }
    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      height: 40px;
      .nav {
        margin: 0 auto;
        height: 40px;
      }
      .username {
        position: absolute;
        top: 50%;
        font-size: 1rem;
        right: 50px;
        transform: translateY(-50%);
      }
      .user {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        right: 0;
        top: 0;
        height: 40px;
        color: $primary;
        padding: 0 0 55px 0;
        &:hover .sub-menu {
          display: block;
        }
        .iconBtn {
          transition: 0.4s;
          font-size: 40px;
          &:hover {
            cursor: pointer;
            color: darken($primary, 20%);
          }
        }
        .sub-menu {
          position: absolute;
          background: #fff;
          top: 70px;
          left: 50%;
          transform: translateX(-50%);
          right: 0;
          padding: 0px;
          margin-top: -1rem;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          width: 200px;
          border: 1px solid rgba(177, 177, 177, 0.65);
          border-top: 0;
          line-height: 30px;
          box-shadow: 0 2px 15px rgba(249, 81, 34, 0.5);
          display: none;
          li {
            .iconBtn {
              font-size: 16px;
              padding-right: 10px;
            }
            h4.welcome {
              text-align: center;
              font-weight: 600;
              border-bottom: 1px solid #ada4a4;
              padding-bottom: 10px;
              font-family: 'Do Hyeon', sans-serif;
            }
            a {
              font-family: 'Noto Sans KR', sans-serif;
              font-weight: 600;
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
            }
          }
        }
      }
    }

    @include media-breakpoint-down(xl) {
      .nav {
        display: none;
      }
    }
  }
</style>
