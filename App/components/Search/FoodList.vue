<template>
  <div class="container">
    <div
      :class="{ 'no-result': !foods.length }"
      class="inner">
      <Loader v-if="loading" />
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>

      <div
        v-else
        class="foods">
        <h2 v-if="!loading">
          <span>{{ total }}개</span>의 <span>"{{ foodName }}"</span>에 대한 검색 결과 입니다.
        </h2>
        <FoodItem
          v-for="food in foods"
          :key="food.prdlstReportNo"
          :food="food" />
        <InfiniteLoading
          v-if="foods.length >= 12 && pgNo < total / 12"
          @infinite="scrolling" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Loader from '~/components/Loader';
  import FoodItem from '~/components/Search/FoodItem';
  // import axios from 'axios';

  export default {
    name: 'InfiniteList',
    data() {
      return {
        scrollData: [],
        // pageNo: 1,
        // total: '',
      };
    },
    components: {
      FoodItem,
      Loader,
    },
    computed: {
      ...mapState('search', ['foods', 'loading', 'message', 'foodName', 'total', 'pgNo']),
    },

    methods: {
      scrolling($state) {
        // 스크롤이 페이지 하단에 위치해도 약간의 딜레이를 주고 데이터를 가져옴
        this.$store.dispatch('search/searchResult', {
          foodName: this.foodName,
        });
        setTimeout(() => {
          if (this.foods.length >= 12 && this.pgNo < this.total / 12) {
            $state.loaded();
          }  else {
            $state.complete();
          }
        }, 1000);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .infinite-status-prompt {
    display: none;
  }
  .container {
    margin-top: 30px;
    .inner {
      background-color: $gray-200;
      padding: 10px 0;
      border-radius: 4px;
      text-align: center;
      &.no-result {
        padding: 70px 0;
      }
    }
    .message {
      color: $gray-400;
      font-size: 20px;
    }
    .foods {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      h2 {
        width: 100%;
        padding: 30px 0;
        font-family: 'Noto Sans KR', sans-serif;
        span {
          color: $primary;
        }
      }
    }
  }
</style>
