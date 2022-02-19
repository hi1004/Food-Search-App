<template>
  <section class="guide-section">
    <div class="container">
      <div class="guide-title-section">
        <h1>How to Use?</h1>
      </div>
      <div class="guide-step">
        <div class="guide-img-section">       
        </div>
        <div class="guide-text-section">
          <h1 class="step-title">
            Step 1
          </h1>
          <p class="step-instruction">
            홈페이지 우측 상단에서 회원가입을 눌러 회원가입을 하세요. <br /><br />
            그 다음 회원가입 때 입력한 정보로 로그인 하세요. <br /><br />
            아이디는 이메일 형식으로 입력해주셔야 합니다!
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
            홈페이지 우측 상단에서 회원가입을 눌러 회원가입을 하세요. <br /><br />
            그 다음 회원가입 때 입력한 정보로 로그인 하세요. <br /><br />
            아이디는 이메일 형식으로 입력해주셔야 합니다!
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
            홈페이지 우측 상단에서 회원가입을 눌러 회원가입을 하세요. <br /><br />
            그 다음 회원가입 때 입력한 정보로 로그인 하세요. <br /><br />
            아이디는 이메일 형식으로 입력해주셔야 합니다!
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
            홈페이지 우측 상단에서 회원가입을 눌러 회원가입을 하세요. <br /><br />
            그 다음 회원가입 때 입력한 정보로 로그인 하세요. <br /><br />
            아이디는 이메일 형식으로 입력해주셔야 합니다!
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
    .guide-step {
      border: 1px solid lightgray;
      background: lightpink;
      height: 30rem;
      display: flex;
      flex-direction: row;
      margin: 3rem 0;
      &:nth-child(2n) {
        flex-direction: row-reverse;
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
      }
    }
  }
</style>