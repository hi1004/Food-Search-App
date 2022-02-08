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
    </client-only>
  </header>
</template>

<script>
  import Logo from '~/components/Logo';
  
  import { mapState } from 'vuex';

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faSignInAlt, faSignOutAlt)

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
        signInIcon: "sign-in-alt",
        signOutIcon: "sign-out-alt"
      };
    },
    computed: {
      ...mapState('signIn',['isAuthorized', 'username'])
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
      padding: 6px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      margin: auto;
      .iconBtn {
        transition: 0.4s;
        &:hover {
          cursor: pointer;
          color: darken($gray-200, 10%);
        }
      }      
    }
    @include media-breakpoint-down(sm) {
      .nav {
        display: none;
      }
    }
  }
</style>
