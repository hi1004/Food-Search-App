<template>
  <div>
    <transition name="slide">
      <div
        v-if="showMobileMenu"
        class="header-mobile">
        <client-only>
          <div
            v-if="isAuthorized"
            class="header-mobile-menu authorized">
            <div class="userinfo-section">
              <h1 class="login-user-name">
                {{ username }}
              </h1>
              <span class="greeting">님 안녕하세요!</span>
            </div>
            <div class="btn-section">
              <div
                @click="signOut"
                class="button">
                <FontAwesomeIcon icon="sign-out-alt" />
                <span>로그아웃</span>
              </div>
              <div
                @click="toMyPage"
                class="button">
                <FontAwesomeIcon icon="circle-info" />
                <span>내 정보</span>
              </div>
              <div
                @click="toSearch"
                class="button">
                <FontAwesomeIcon icon="fa-search" />
                <span>검색</span>
              </div>
            </div>
          </div>
          <div
            v-if="!isAuthorized"
            class="header-mobile-menu unauthorized">
            <div class="userinfo-section">
              <h1><span class="login-text-color">로그인</span> 해주세요!!</h1>
            </div>
            <div class="btn-section">
              <div
                @click="toSignIn"
                class="button">
                <FontAwesomeIcon icon="sign-in-alt" />
                <span>로그인</span>
              </div>
              <div
                @click="toSignUp"
                class="button">
                <FontAwesomeIcon icon="user-plus" />
                <span>회원가입</span>
              </div>
              <div
                @click="toSearch"
                class="button">
                <FontAwesomeIcon icon="fa-search" />
                <span>검색</span>
              </div>
            </div>
          </div>
        </client-only>
      </div>
    </transition>
    <header :class="{ 'header--hidden': !showNavbar }">
      <div class="container">
        <div
          class="logo"
          @click="toHome">
          <Logo />
        </div>
        <div class="header-convenience">
          <client-only>
            <h4
              class="username"
              v-if="isAuthorized">
              {{ username }}
            </h4>
            <ul
              v-if="isAuthorized"
              class="user active">
              <FontAwesomeIcon
                class="iconBtn userIcon"
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

                <h4
                  class="welcome"
                  v-if="isAuthorized">
                  {{ username }}
                </h4>

                <li v-if="isAuthorized">
                  <a
                    href="javascript:void(0)"
                    @click="toMyPage">
                    <FontAwesomeIcon
                      class="iconBtn"
                      icon="circle-info" />
                    내 정보
                  </a>
                </li>
                <li v-if="isAuthorized">
                  <a
                    href="javascript:void(0)"
                    @click="signOut">
                    <FontAwesomeIcon
                      class="iconBtn"
                      icon="sign-out-alt" />
                    로그아웃
                  </a>
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
            <FontAwesomeIcon
              class="iconBtn search-btn"
              @click="toSearch"
              loading="lazy"
              icon="fa-search" />
          </client-only>
        </div>
        <div class="header-mobile-btn">
          <FontAwesomeIcon
            v-if="!showMobileMenu"
            @click="toggleMobileMenu"
            icon="fa-solid fa-bars"
            class="menu-icon" />
          <FontAwesomeIcon
            v-if="showMobileMenu"
            @click="toggleMobileMenu"
            icon="fa-solid fa-x"
            class="menu-icon" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  import Logo from '~/components/Logo';
  import { mapState } from 'vuex';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import {
    faSignInAlt,
    faSignOutAlt,
    faCircleUser,
    faCircleInfo,
    faUserPlus,
    faUser,
    faSearch,
    faBars,
    faX,
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  library.add(faSignInAlt, faSignOutAlt, faCircleUser, faCircleInfo, faUserPlus, faUser, faSearch, faBars, faX);
  export default {
    components: {
      Logo,
      FontAwesomeIcon,
    },
    data() {
      return {
        signInIcon: 'sign-in-alt',
        signOutIcon: 'sign-out-alt',
        showNavbar: true,
        lastScrollPosition: 0,
        addActive: false,
        showMobileMenu: false,
      };
    },
    computed: {
      ...mapState('signIn', ['isAuthorized', 'username']),
    },
    methods: {
      toHome() {
        this.showMobileMenu = false;
        const urlEl = document.querySelector('.user');
        urlEl.classList.remove('login');
      },
      isMatch(path) {
        if (!path) return false;
        return path.test(this.$route.fullPath);
      },
      toSignIn() {
        this.showMobileMenu = false;
        this.$router.push('/signIn');
      },
      toSearch() {
        this.showMobileMenu = false;
        const urlEl = document.querySelector('.user');
        urlEl.classList.remove('login');
        this.$router.push('/search');
      },
      toMyPage() {
        this.showMobileMenu = false;
        this.$router.push('/myPage');
      },
      async signOut() {
        this.showMobileMenu = false;
        await this.$store.dispatch('signIn/userLogout');
        this.$router.push('/');
      },
      toSignUp() {
        this.showMobileMenu = false;
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
      toggleMobileMenu() {
        this.showMobileMenu = !this.showMobileMenu;
      },
    },
    watch: {
      showMobileMenu() {
        const $header = document.querySelector('header');
        const $headerMobileBtn = document.querySelector('.header-mobile-btn');
        const $body = document.body;
        if (this.showMobileMenu) {
          $headerMobileBtn.classList.add('active');
          $header.classList.add('bg-active');
          $body.classList.add('body-scroll-active');
        } else {
          $headerMobileBtn.classList.remove('active');
          $header.classList.remove('bg-active');
          $body.classList.remove('body-scroll-active');
        }
      },
    },
    mounted() {
      this.$store.dispatch('cursor/mouse');
      window.addEventListener('scroll', this.onScroll);
      window.addEventListener('resize', () => {
        const width = window.innerWidth;
        if (width >= 540) {
          this.showMobileMenu = false;
        }
      });
      window.addEventListener('click', (e) => {
        console.log(e.target)
        const btn = document.querySelector('.user svg');
        const urlEl = document.querySelector('.user');
        btn === e.target ? urlEl.classList.toggle('login') : false;
        if (urlEl.classList.contains('login')) {
          !(btn === e.target) ? urlEl.classList.remove('login') : false;
        }                  
      })
    },
    created() {
      if (process.client) {
        document.querySelector('.userIcon');
        this.$store.dispatch('cursor/mouse');
      }
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
    transition: background 0.4s;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    z-index: 99;
    box-sizing: border-box;
    &.bg-active {
      background-color: rgba(0, 0, 0, 0);
    }
    @include media-breakpoint-down(sm) {
      padding: 0 10px;
    }
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
        font-size: 1.3rem;
        letter-spacing: 1px;
        line-height: 0;
        color: $white;
        margin: 0;
        font-family: 'Do Hyeon', sans-serif;
      }
      .header-convenience {
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
            transition: 0.4s;
            display: flex;
            flex-direction: column;
            width: 150px;
            border: 1px solid rgba(177, 177, 177, 0.65);
            border-top: 0;
            line-height: 50px;
            display: none;
            h4.welcome {
              text-align: center;
              font-weight: 600;
              border-bottom: 1px solid #ada4a4;
              padding-bottom: 10px;
              font-family: 'Do Hyeon', sans-serif;
              margin: 0;
              padding: 10px 0;
            }
            li {
              .iconBtn {
                font-size: 16px;
                padding-right: 10px;
              }

              a {
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 600;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
              }
              &:hover {
                background: $primary;
                a {
                  color: $white;
                }
              }
            }
          }
        }
      }
      .header-mobile-btn {
        display: none;
        transition: 1s;
      }
      @include media-breakpoint-down(sm) {
        .header-convenience {
          display: none;
        }
        .header-mobile-btn {
          display: block;
          .menu-icon {
            color: $white;
            font-size: 25px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .header-mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #2c3e50;
    font-family: 'Jua', sans-serif;
    z-index: 11;
    .header-mobile-menu {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      padding: 2rem 0;
      justify-content: center;
      align-items: center;
      .userinfo-section {
        color: #fff;
        h1 {
          display: inline;
          color: #fff;
          &.login-user-name {
            font-size: 2.5rem;
            color: $primary;
          }

          .login-text-color {
            color: $primary;
          }
        }
        .greeting {
          font-size: 1.3rem;
        }
      }
      .btn-section {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 2rem;
        cursor: pointer;
        .button {
          width: 7rem;
          height: 7rem;
          border-radius: 0.5rem;
          background: transparent;
          border: none;
          color: #fff;
          text-align: center;

          font-size: 3rem;
          transition: 0.2s;
          span {
            display: block;
            font-size: 1rem;
          }
          &:hover {
            background: $primary;
          }
        }
      }
    }
  }
  .slide-enter {
    transform: translateY(-100vh);
    opacity: 0;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: 0.5s;
  }
  .slide-leave-to {
    transform: translateY(-100vh);
    opacity: 0;
  }
</style>
<style lang="scss">
  body {
    overflow: scroll;
    &.body-scroll-active {
      overflow: hidden;
      transition: 0.4s;
    }
  }
</style>
