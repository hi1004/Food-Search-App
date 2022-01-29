<template>
  <div class="container">
    <div :class="{ 'no-result': !foods.length }" class="inner">
      <Loader v-if="loading" />
      <div v-if="message" class="message">
        {{ message }}
      </div>

      <div v-else class="foods">
        <h2 v-if="!loading">
          <span>{{ total.totalCount }}개</span>의 <span>"{{ foodName }}"</span>에 대한 검색 결과 입니다.
        </h2>
        <FoodItem v-for="food in scrollData" :key="food.prdlstReportNo" :food="food" />
        <InfiniteLoading v-if="scrollData.length" @infinite="scrolling" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Loader from '~/components/Loader';
  import FoodItem from '~/components/Search/FoodItem';
  import axios from 'axios';
  export default {
    name: 'InfiniteList',
    data() {
      return {
        scrollData: [],
        page: 1,
        total: '',
      };
    },
    components: {
      FoodItem,
      Loader,
    },
    // mounted() {
    //   console.log(this.foods);
    // },
    computed: {
      ...mapState('search', ['foods', 'loading', 'message', 'foodName']),
      url() {
        const API_KEY = `%2B%2FIm5j1T7QlZAUwzFL9dWaTPwfKay%2B%2BuAKfoBQsixwWd7Klt7ALIFepp9rQcCnSqw6oIY82%2FK%2FiOsja2j4zZ9g%3D%3D`;
        // free fake api 사용
        return `/api/B553748/CertImgListService/getCertImgListService?serviceKey=${API_KEY}&prdlstNm=${this.foodName}&returnType=json&pageNo=${this.page}&numOfRows=12`;
      },
    },
    created() {
      this.fetchData();
    },

    methods: {
      async fetchData() {
        if (this.foodName === '') return;
        const response = await axios.get(this.url);
        this.scrollData = response.data.list;
        this.total = response.data;
      },
      scrolling($state) {
        // 스크롤이 페이지 하단에 위치해도 약간의 딜레이를 주고 데이터를 가져옴
        setTimeout(async () => {
          this.page++;
          const response = await axios.get(this.url);
          if (response && response.data.list.length > 1) {
            response.data.list.forEach(item => this.scrollData.push(item));
            $state.loaded();
          } else {
            $state.complete();
          }
        }, 500);
      },
    },
  };
</script>

<style lang="scss" scoped>
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
