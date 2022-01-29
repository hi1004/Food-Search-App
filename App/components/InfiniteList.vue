<template>
  <div>
    <div
      v-for="(item, idx) in scrollData"
      :key="idx">
      <div style="padding: 5px;">
        {{ item.prdlstNm }}
      </div>
    </div>
    <br />
    <infinite-loading
      v-if="scrollData.length"
      @infinite="scrolling" />
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "InfiniteList",
    data() {
      return {
        scrollData: [],
        page: 1,
      };
    },
    computed: {
      url() {
        const API_KEY=`%2B%2FIm5j1T7QlZAUwzFL9dWaTPwfKay%2B%2BuAKfoBQsixwWd7Klt7ALIFepp9rQcCnSqw6oIY82%2FK%2FiOsja2j4zZ9g%3D%3D`
        // free fake api 사용
        return `/api/B553748/CertImgListService/getCertImgListService?serviceKey=${API_KEY}&prdlstNm=오징어&returnType=json&pageNo=${this.page}&numOfRows=12`;
      },
    },
    created() {
      this.fetchData();
    },

    methods: {
      async fetchData() {
        const response = await axios.get(this.url);
        this.scrollData = response.data.list;
      },
      scrolling($state) {
   
        // 스크롤이 페이지 하단에 위치해도 약간의 딜레이를 주고 데이터를 가져옴
        setTimeout(async () => {
          this.page++;
               console.log($state, this.page);
          const response = await axios.get(this.url);
          if (response && response.data.list.length > 1) {
            response.data.list.forEach((item) => this.scrollData.push(item));
            $state.loaded();
          } else {
            $state.complete();
          }
        }, 1000);
      },
    },
  };
</script>