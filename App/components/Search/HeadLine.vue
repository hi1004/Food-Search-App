<template>
  <div class="headLine-wrap">
    <div class="container headLine-section">
      <h1>어떤<span>식품</span>을찾으세요?</h1>
      <p>
        안전한 먹거리 생활을 위해 식품의약품안전처 데이터활용서비스에 있는 <br />
        정보를 이용하여 식품의약품안전처에서 알레르기 유발물질 표시 대상으로 선정된 <br />
        19가지의 음식을 확인하며 안전하게 이용할 수 있습니다.
      </p>
      <Search />
    </div>
  </div>
</template>

<style lang="scss">
  .headLine-wrap {
    height: 100vh;
    background: url('~/assets/images/home/headline_search.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    .container.headLine-section {
      padding: 40px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
      }
      p {
        margin: 30px 0;
        color: $white;
         font-family: 'Noto Sans KR', 'Roboto', sans-serif;
         text-align: center;
         opacity: 0.9;
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
        border: none;
        font-weight: 400;
        background-color: #fff;
        border-radius: 36px;
        box-shadow: 0 13px 17px 0 rgb(0 0 0 / 50%);
        padding: 0;
        text-align: center;
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
      }
      .search-btn {
        display: none;
      }
      .home-search-btn {
        display: inline-block;
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
  }
</style>
