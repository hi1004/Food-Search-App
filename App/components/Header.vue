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
    <client-only>
      <div
        v-if="!isAuthorized"
        class="user"
        @click="toSignIn">
        로그인
      </div>
    </client-only>
    <client-only>
      <div
        v-if="isAuthorized"
        class="user"
        @click="signOut">
        로그아웃
      </div>
    </client-only>
  </header>
</template>

<script>
  import Logo from '~/components/Logo';
  import { mapState } from 'vuex';
  export default {
    components: {
      Logo,
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
      };
    },
    computed: {
      ...mapState('signIn',['isAuthorized'])
    },
    methods: {
      isMatch(path) {
        if (!path) return false;
        return path.test(this.$route.fullPath);
      },
      toSignIn() {
        this.$router.push('/signIn');
      },
      signOut() {
        this.$store.dispatch('signIn/userLogout');         
      }
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

    @include media-breakpoint-down(sm) {
      .nav {
        display: none;
      }
    }
  }
</style>
