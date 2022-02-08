<template>
  <transition name="slide">
    <button
      id="totopBtn"
      type="button"
      v-if="!isScrollTop"
      @click="toTop">
      to top 
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isScrollTop: true,
    }
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
      console.log("버튼 작동")
    }
  }
}
</script>

<style lang="scss" scoped>
  #totopBtn {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
  .slide-enter {
    transform: translateX(100px);
    opacity: 0;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: 0.5s;
  }
  .slide-leave-to {
    transform: translateX(100px);
    opacity: 0;
  } 
</style>