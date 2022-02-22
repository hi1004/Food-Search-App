<template>
  <div class="headLine-wrap">
    <div class="container headLine-section">
      <h1 class="headLine-title">
        어떤<span>식품</span>을찾으세요?
      </h1>
      <p class="headLine-text">
        안전한 먹거리 생활을 위해 식품의약품안전처 데이터활용서비스에 있는 <br />
        정보를 이용하여 식품의약품안전처에서 알레르기 유발물질 표시 대상으로 선정된 <br />
        19가지의 음식을 확인하며 안전하게 이용할 수 있습니다.
      </p>
      <Search class="headLine-search" />
    </div>
  </div>
</template>
<script>

  import { gsap } from 'gsap';
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  export default {
  
    mounted() {
      this.setGsap()
    },
    methods: {
      setGsap() {
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.headLine-search').forEach(el => {
          gsap.set(el, {
            opacity: 0,
            y: 50,          
          })
          gsap.to(el, {
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
            },
            opacity: 1,
            y: 0,
            duration: 1, })
        })
      }
    }
  }
</script>

<style lang="scss">
  .headLine-wrap {
    height: 100vh;
    background: url('~/assets/images/home/headline_search.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    @include media-breakpoint-down(sm) {
      background-attachment: scroll;
      height: 50vh;
    }
    .container.headLine-section {
      padding: 40px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include media-breakpoint-down(sm) {
        margin-bottom: 30px;
      }
      h1 {
        line-height: 1;
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
        font-size: 60px;
        text-align: center;
        color: $white;
        font-weight: 600;
        span {
          color: #1bff22;
        }
        @include media-breakpoint-down(sm) {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
      }
      p {
        margin: 30px 0;
        color: $white;
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
        text-align: center;
        opacity: 0.9;
        @include media-breakpoint-down(sm) {
          display: none;
        }
      }

      /* SEARCH */
      .search-container {
        width: calc(70%);
        position: relative;
        padding: 0;
        @include media-breakpoint-down(sm) {
          width: 100%;
        }
      }
      .home-search-input {
        height: 73px;
        padding: 0 40px;
        line-height: 73px;
        font-size: 20px;
        text-align: center;
        margin: 0;
        border: none;
        font-weight: 400;
        background-color: #fff;
        border-radius: 36px;
        box-shadow: 0 13px 17px 0 rgb(0 0 0 / 50%);
        padding: 0;
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
        @include media-breakpoint-down(sm) {
          height: 46px;
          line-height: 46px;
          text-align: left;
          padding-left: 20px;
        }
      }
      .search-btn {
        display: none;
      }
      .home-search-btn {
        display: inline-block;
        position: absolute;
        margin: 0;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        img {
          @include media-breakpoint-down(sm) {
            width: 20px;
          }
        }
      }
    }
  }
</style>
