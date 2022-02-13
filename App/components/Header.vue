<template>
  <header :class="{ 'header--hidden': !showNavbar }">
    <div class="container">
      <Logo @click="removeUser" />
      <!-- <div class="nav nav-pills">
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
      </div> -->

      <div class="convenience">
        <client-only>
          <h4
            class="username"
            v-if="isAuthorized">
            {{ username }}
          </h4>
          <ul
            v-if="isAuthorized"
            @click="onActive"
            class="user active">
            <FontAwesomeIcon
              class="iconBtn"
              icon="circle-user" />
            <ul class="sub-menu">
              <li>
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
              </li>
              <li>
                <div v-if="isAuthorized">
                  <h4 class="welcome">
                    {{ username }}
                  </h4>
                  <a
                    href="javascript:void(0)"
                    @click="toMyPage">
                    <FontAwesomeIcon
                      class="iconBtn"
                      icon="sign-out-alt" />
                    내정보
                  </a>
                  <a
                    href="javascript:void(0)"
                    @click="signOut">
                    <FontAwesomeIcon
                      class="iconBtn"
                      icon="sign-out-alt" />
                    로그아웃
                  </a>
                </div>
              </li>
              <li>
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
              </li>
            </ul>
          </ul>
          <ul
            v-if="!isAuthorized"
            @click="onActive"
            class="user">
            <FontAwesomeIcon
              class="iconBtn"
              icon="circle-user" />
            <ul class="sub-menu">
              <li>
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
              </li>
              <li>
                <div v-if="isAuthorized">
                  <h4 class="welcome">
                    {{ username }}
                  </h4>
                </div>
              </li>
              <li>
                <div v-if="isAuthorized">
                  <a
                    href="javascript:void(0)"
                    @click="toMyPage">
                    <FontAwesomeIcon
                      class="iconBtn"
                      icon="fa-user" />
                    내정보
                  </a>
                </div>
              </li>
              <li>
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
              </li>
            </ul>
          </ul>
        </client-only>

        <FontAwesomeIcon
          class="iconBtn search-btn"
          @click="toSearch"
          
          icon="fa-search" />
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from '~/components/Logo';
  import { mapState } from 'vuex';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import {
    faSignInAlt,
    faSignOutAlt,
    faCircleUser,
    faUserPlus,
    faUser,
    faSearch,
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  library.add(faSignInAlt, faSignOutAlt, faCircleUser, faUserPlus, faUser, faSearch);
  export default {
    components: {
      Logo,
      FontAwesomeIcon,
    },
    data() {
      return {
        // navigations: [
        //   {
        //     name: 'Home',
        //     href: '/',
        //   },
        //   {
        //     name: 'Search',
        //     href: '/search/',
        //   },
        //   {
        //     name: 'My Page',
        //     href: '/myPage',
        //   },
        // ],
        signInIcon: 'sign-in-alt',
        signOutIcon: 'sign-out-alt',
        showNavbar: true,
        lastScrollPosition: 0,
        addActive: false,
      };
    },
    computed: {
      ...mapState('signIn', ['isAuthorized', 'username']),
    },
    methods: {
      removeUser() {
        const urlEl = document.querySelector('.user');
        urlEl.classList.remove('login');
      },
      isMatch(path) {
        if (!path) return false;
        return path.test(this.$route.fullPath);
      },
      toSignIn() {
        this.$router.push('/signIn');
      },
      toSearch() {
        const urlEl = document.querySelector('.user');
        urlEl.classList.remove('login');
        this.$router.push('/search');
      },
      toMyPage() {
        this.$router.push('/myPage');
      },
      async signOut() {
        await this.$store.dispatch('signIn/userLogout');
        this.$router.push('/');
      },
      toSignUp() {
        this.$router.push('/signUp');
      },
      onActive() {
        const urlEl = document.querySelector('.user');
        urlEl.classList.toggle('login');
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
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    z-index: 99;
    box-sizing: border-box;
    &.header--hidden {
      box-shadow: none;
      transform: translate3d(0, -100%, 0);
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
        .nav-link {
          color: #fff;
        }
      }
      .username {
        font-size: 1rem;
        line-height: 0;
        color: $white;
        margin: 0;
      }
      .convenience {
        display: flex;
        align-items: center;
        height: 40px;
        width: 150px;
        justify-content: space-around;
        .search-btn {
          color: $white;
          font-size: 25px;
          cursor: pointer;
        }
        .user {
          display: flex;
          align-items: center;
          position: relative;
          height: 40px;
          margin: 0;
          color: $white;
          padding: 0;
          &.login {
            .sub-menu {
              display: block;
            }
          }
          &.active {
            color: $primary;
          }
          .iconBtn {
            transition: 0.4s;
            font-size: 30px;
            &:hover {
              cursor: pointer;
            }
          }

          .sub-menu {
            position: absolute;
            background: #fff;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            margin-top: -1rem;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            width: 150px;
            border: 1px solid rgba(177, 177, 177, 0.65);
            border-top: 0;
            line-height: 50px;
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
    }

    @include media-breakpoint-down(xl) {
      .nav {
        display: none;
      }
    }
  }
</style>
