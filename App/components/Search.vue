<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text"
      placeholder="검색"
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      type: '제품명',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['제품명', '제조원', '유형']
        },
        {
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: '??',
      
        }
      ]
    }
  },
  methods: {
    async apply() {
        const API_KEY = '%2B%2FIm5j1T7QlZAUwzFL9dWaTPwfKay%2B%2BuAKfoBQsixwWd7Klt7ALIFepp9rQcCnSqw6oIY82%2FK%2FiOsja2j4zZ9g%3D%3D';
      const url = `http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService?serviceKey=${API_KEY}&prdlstNm=${this.title}&returnType=json&pageNo=1&numOfRows=30`
      await axios.get(`/api${url}`)
      .then((res) => {
        console.log('proxyRequest res', res.data)
      })
      .catch((error) => {
        console.log('proxyRequest error', error)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    flex-shrink: 0;
    font-weight: 700;
  }

  @include media-breakpoint-down(lg) {
    display: block;
    input {
      margin-right: 0;
      margin-bottom: 10px;
    }
    .selects {
      margin-right: 0;
      margin-bottom: 10px;
      select {
        width: 100%;
      }
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
