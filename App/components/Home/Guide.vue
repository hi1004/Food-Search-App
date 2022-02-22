<template>
  <section class="guide-section">
    <div class="container">
      <div class="guide-title-section">
        <h1>서비스 이용 방법</h1>
      </div>
      <div class="guide-step">
        <div class="guide-img-section ">
          <div class="guide-img-box">
            <img
              src="~assets/images/guide/1.PNG"
              alt="step1" />
          </div>    
        </div>
        <div
          class="guide-text-section">
          <h1 class="step-title">
            Step 1
          </h1>
          <p class="step-instruction">
            먼저 <nuxt-link
              class="link"
              to="/signUp">
              <FontAwesomeIcon
                icon="user-plus" /> 회원가입
            </nuxt-link>을 하신 후 <nuxt-link
              class="link"
              to="/signUp">
              <FontAwesomeIcon
                icon="sign-in-alt" /> 로그인
            </nuxt-link>하세요. <br />
            아이디는 이메일 형식으로 입력해주셔야 합니다.
          </p>
        </div>
      </div>
      <div class="guide-step">
        <div class="guide-img-section ">
          <div class="guide-img-box">
            <img
              src="~assets/images/guide/2.PNG"
              alt="step2" />
          </div>        
        </div>
        <div class="guide-text-section">
          <h1 class="step-title">
            Step 2
          </h1>
          <p class="step-instruction">
            로그인 후 <nuxt-link
              class="link"
              to="/myPage">
              <FontAwesomeIcon
                icon="fa-user" /> 내 정보
            </nuxt-link>로 들어가세요. <br />
            알러지 정보 변경 탭에서 알러지 정보를 등록하세요.
          </p>
        </div>
      </div>
      <div class="guide-step">
        <div class="guide-img-section ">
          <div class="guide-img-box">
            <img
              src="~assets/images/guide/3.PNG"
              alt="step3" />
          </div>        
        </div>
        <div class="guide-text-section">
          <h1 class="step-title">
            Step 3
          </h1>
          <p class="step-instruction">
            <nuxt-link
              to="/"
              event=""
              @click.native="toSearchSection"
              class="link">
              <FontAwesomeIcon
                icon="fa-search" /> 검색 섹션
            </nuxt-link>으로 이동한 후 <br />
            알러지 체크를 원하는 상품의 이름을 검색해주세요.
          </p>
        </div>
      </div>
      <div class="guide-step">
        <div class="guide-img-section ">
          <div class="guide-img-box">
            <img
              src="~assets/images/guide/4.PNG"
              alt="step4" />
          </div>      
        </div>
        <div class="guide-text-section">
          <h1 class="step-title">
            Step 4
          </h1>
          <p class="step-instruction">
            사용자의 알러지 유발성분 포함 여부를 알려드립니다!<br />
            알러지 정보가 표기되지 않은 상품은 ?가 표시됩니다.<br />
            로그인을 하지 않은 경우 서비스가 제공되지 않습니다.
          </p>
        </div>
      </div>
    </div>    
  </section>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import {
    faSignInAlt,
    faCircleInfo,
    faUserPlus,
    faSearch,
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  import { gsap } from 'gsap';
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  library.add(faSignInAlt, faCircleInfo, faUserPlus, faSearch);

  
  export default {
    components: {
      FontAwesomeIcon,
    },
    mounted() {
      this.setGsap()
    },
    methods: {
      toSearchSection() {
        const searchBar = document.querySelector('.home-search-input');
        searchBar.focus();
      }, 
      setGsap() {
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.guide-img-section').forEach(el => {
          gsap.set(el, {
            opacity: 0,
            y: 50,          
          })
          gsap.to(el, {
            scrollTrigger: {
              trigger: el,
              start: "top center",
            },
            opacity: 1,
            y: 0,
            duration: 1, })
        })
        document.querySelectorAll('.guide-text-section').forEach(el => {
          gsap.set(el, {
            opacity: 0,
            y: 50,          
          })
          gsap.to(el, {
            scrollTrigger: {
              trigger: el,
              start: "top center",
            },
            opacity: 1,
            y: 0,
            delay: .3,
            duration: 1, })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .guide-section {
    padding: 5rem 0 0;
    font-family: "Jua", sans-serif;   
    overflow: hidden;
    .guide-title-section {
      text-align: center;
    } 
    .guide-step {
      border-top: 1px solid lightgray;
      height: 30rem;
      display: flex;
      flex-direction: row;
      margin: 3rem 0;
      &:nth-child(2n) {
        flex-direction: row-reverse;
        @include media-breakpoint-down(xl) {
          height: 50rem;
          flex-direction: column;
        }
        @include media-breakpoint-down(sm) {
          height: 35rem;
        }
      }
      @include media-breakpoint-down(xl) {
        height: 50rem;
        flex-direction: column;
        margin: 2rem 0;
      }
      @include media-breakpoint-down(sm) {
        height: 35rem;
        margin: 1.2rem 0;
      }
      .guide-img-section {
        height: 100%;
        position: relative;
        flex: 1;
        .guide-img-box {
          height: 80%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0.5rem 0.5rem 0.5rem black;
          img {
            height: 100%;
          }
        }
      }
      .guide-text-section {
        height: 100%;
        flex: 1.2;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        @include media-breakpoint-down(xl) {
          flex: 0.6;
        }
        .step-title {
          font-size: 3rem;
          @include media-breakpoint-down(sm) {
            font-size: 2rem;
          }
        }
        .step-instruction {
          font-size: 1.2rem;
          .link {
            text-decoration: none;
            svg {
              transform: translateY(-0.2rem);
            }
          }
          @include media-breakpoint-down(sm) {
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>