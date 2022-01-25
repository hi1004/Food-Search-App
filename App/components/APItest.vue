<template>
  <div class="container">
    <input
      type="text"
      v-model="title" 
      @keyup.enter="apply" />
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
      title:"",
      tpye: 'movie',
      number: 10,
      year: '',
    }
  },
  methods: {
    async apply() {
      // this.$store.dispatch('movie/searchMovies', {
      //   title: this.title
      // })
      const API_KEY = '%2B%2FIm5j1T7QlZAUwzFL9dWaTPwfKay%2B%2BuAKfoBQsixwWd7Klt7ALIFepp9rQcCnSqw6oIY82%2FK%2FiOsja2j4zZ9g%3D%3D';
      const url = `http://apis.data.go.kr/B553748/CertImgListService/getCertImgListService?serviceKey=${API_KEY}&prdlstNm=${this.title}&returnType=json&pageNo=1&numOfRows=30`
      await axios.get(`/api${url}`)
      .then((res) => {
        console.log('proxyRequest res', res)
      })
      .catch((error) => {
        console.log('proxyRequest error', error)
      });


    
    }
  }
}
</script>

<style>

</style>