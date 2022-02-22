<template>
  <transition name="slide">
    <FontAwesomeIcon
      id="totopBtn"
      v-if="!isScrollTop"
      @click="toTop"
      :icon="toTopIcon" />
  </transition>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faArrowCircleUp)

  export default {
    data() {
      return {
        isScrollTop: true,
        toTopIcon: 'arrow-circle-up'
      }
    },
    components: {
      FontAwesomeIcon,
    },
    created () {
      if (process.client) {
        window.addEventListener('scroll', this.handleScroll);
      }    
    },
    unmouted () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const scrollY = window.scrollY;
        this.isScrollTop = scrollY === 0
      },
      toTop(){
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  #totopBtn {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    transition: 0.4s;
    z-index: 10;
    color: $primary;
    &:hover {
      cursor: pointer;
      color: darken($gray-200, 10%);
    }
  }
  .slide-enter {
    transform: translateY(100px);
    opacity: 0;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: 0.5s;
  }
  .slide-leave-to {
    transform: translateY(100px);
    opacity: 0;
  } 
</style>