<template>
  <div class="signUp">
    <form class="user-form">
      <h1 class="user-title">
        회원가입
      </h1>
      <div class="user-input">
        <label for="inputEmail">이름</label>
        <input
          type="text"         
          placeholder="Username"
          v-model.trim="userinfo.username" />
        <small v-if="isBlankUsername">필수 입력값입니다.</small>
      </div>
      <div class="user-input">
        <label for="inputEmail">이메일 아이디</label>
        <input
          type="email"
          placeholder="Enter email"
          v-model.trim="userinfo.email" />
        <small v-if="isBlankEmail">필수 입력값입니다.</small>
        <small v-if="!isValidEmail">이메일 형식을 확인해주세요.</small>
      </div>
      <div class="user-input">
        <label for="inputPassword">비밀번호</label>
        <input
          type="password"
          placeholder="Password"
          v-model.trim="userinfo.password" />
        <small v-if="isBlankPassword">필수 입력값입니다.</small>
      </div>
      <div class="user-input">
        <label for="inputPassword">비밀번호 확인</label>
        <input
          type="password"
          placeholder="Password"
          v-model.trim="userinfo.cPassword" />
        <small v-if="isBlankCPassword">필수 입력값입니다.</small>
        <small v-if="!(isMatchPassword)">비밀번호란과 입력된 값이 다릅니다.</small>
      </div>
      <button
        @click="register"
        type="button"
        class="user-register">
        Sign Up
      </button>
    </form>
  </div>
</template>
 
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        userinfo: {
          username: '',
          email: '',
          password: '',
          cPassword: '', 
          checkedAllergies: [], 
        },
        isBlankUsername: true,
        isBlankEmail: true,
        isValidEmail: true,
        isBlankPassword: true,
        isBlankCPassword: true, 
        isMatchPassword: true,  
      }
    },
    watch: {
      userinfo: {
        deep: true,
        handler(newData) {
          //check required value is blank
          this.isBlankUsername = newData.username === '';
          this.isBlankEmail = newData.email === '';
          this.isBlankPassword = newData.password === '';
          this.isBlankCPassword = newData.cPassword === '';
          //check is it valid email
          const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
          this.isValidEmail = !(newData.email !== '' && newData.email.match(regExp) == null);
          //check password and confirm password are match
          this.isMatchPassword = newData.cPassword === '' || newData.password === newData.cPassword
        }
      }
    },
    methods: {
      async register() {
        // check blank and incorrect format
        if (this.isBlankUsername) {
          alert('이름을 입력해주세요!');
          return;
        }
        if (this.isBlankEmail) {
          alert('이메일을 입력해주세요!');
          return;
        }
        if (!this.isValidEmail) {
          alert('유효하지 않은 이메일입니다.');
          return;
        }
        if (this.isBlankPassword) {
          alert('비밀번호를 입력해주세요!');
          return;
        }
        if (this.isBlankCPassword) {
          alert('비밀번호 확인을 입력해주세요!');
          return;
        }
        if (!this.isMatchPassword) {
          alert('비밀번호가 일치하지 않아요!');
          return;
        }  
        try {
          await axios.post('https://foodsearch.shop/api/user/register', {
            name: this.userinfo.username,
            email: this.userinfo.email,
            password: this.userinfo.password,
          });
          alert(`${this.userinfo.username}님 회원가입에 성공하셨습니다.`);
          this.$router.push('/signIn');
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            alert(error.response.data.email);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        } 
      }
    }
  }
</script>

<style lang="scss">
  .signUp {
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Jua", sans-serif;
    .user-title {
      text-align: center;
      font-size: 2.8rem
    }
    .user-form {
      width: 100%;
      max-width: 540px;
      height: 40rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;             
      .user-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;    
        label {
          font-size: 1.5rem;
        }      
        input {
          width: 100%;
          border: none;
          border-bottom: solid 1.5px gray;
          height: 2.5rem;
          position: relative;
          &:focus {
            outline: none;              
          }  
        }           
      }
      .user-register {
        width: 100%;
        height: 3rem;
      }
    }
    button {
      border: none;
      border-radius: 0.1rem;
      background-color: #333333;
      color: white;
    }
  }
</style>