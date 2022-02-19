<template>
  <section class="guide-section">
    <div class="container">
      <div class="guide-title-section">
        <h1>서비스 이용 방법</h1>
      </div>
      <div class="guide-step">
        <div class="guide-img-section">       
        </div>
        <div class="guide-text-section">
          <h1 class="step-title">
            Step 1
          </h1>
          <p class="step-instruction">
            홈페이지 우측 상단에서 회원가입을 눌러<br />
            회원가입을 하신 후 로그인 하세요. <br />
            아이디는 이메일 형식으로 입력해주셔야 합니다.
          </p>
        </div>
      </div>
      <div class="guide-step">
        <div class="guide-img-section">       
        </div>
        <div class="guide-text-section">
          <h1 class="step-title">
            Step 2
          </h1>
          <p class="step-instruction">
            로그인 후 우측 상단의 내 정보로 들어가세요. <br />
            알러지 정보 변경 탭에서 알러지 정보를 등록하세요.
          </p>
        </div>
      </div>
      <div class="guide-step">
        <div class="guide-img-section">       
        </div>
        <div class="guide-text-section">
          <h1 class="step-title">
            Step 3
          </h1>
          <p class="step-instruction">
            돋보기 아이콘을 눌러 검색 섹션으로 이동한 후 <br />
            알러지 체크를 원하는 상품의 이름을 검색해주세요.
          </p>
        </div>
      </div>
      <div class="guide-step">
        <div class="guide-img-section">       
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
  export default {

  }
</script>

<style lang="scss" scoped>
  .guide-section {
    padding: 5rem 0;
    font-family: "Jua", sans-serif;   
    .guide-title-section {
      text-align: center;
    } 
    .guide-step {
      border: 1px solid lightgray;
      background: lightpink;
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
      }
      @include media-breakpoint-down(sm) {
        height: 35rem;
      }
      .guide-img-section {
        height: 100%;
        background: lightcyan;
        position: relative;
        flex: 1;
      }
      .guide-text-section {
        height: 100%;
        background: lightyellow;
        flex: 1.5;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        @include media-breakpoint-down(xl) {
          flex: 1;
        }
        .step-title {
          font-size: 3rem;
          @include media-breakpoint-down(sm) {
            font-size: 2rem;
          }
        }
        .step-instruction {
          font-size: 1.2rem;
          @include media-breakpoint-down(sm) {
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>