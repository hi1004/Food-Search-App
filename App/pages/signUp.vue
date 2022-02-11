<template>
  <div id="signUp">
    <form>
      <div class="user-group">
        <label for="inputEmail">Username</label>
        <input
          type="text"
          class="user-input"   
          @keyup.enter="register"       
          placeholder="Username"
          v-model.trim="userinfo.username" />
        <small v-if="isBlankUsername">필수 입력값입니다.</small>
      </div>
      <div class="user-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          class="user-input"
          @keyup.enter="register"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model.trim="userinfo.email" />
        <small v-if="isBlankEmail">필수 입력값입니다.</small>
        <small v-if="!isValidEmail">이메일 형식을 확인해주세요.</small>
      </div>
      <div class="user-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          class="user-input"
          @keyup.enter="register"
          placeholder="Password"
          v-model.trim="userinfo.password" />
        <small v-if="isBlankPassword">필수 입력값입니다.</small>
      </div>
      <div class="user-group">
        <label for="inputPassword">Confirm Password</label>
        <input
          type="password"
          @keyup.enter="register"
          class="user-input"
          placeholder="Password"
          v-model.trim="userinfo.cPassword" />
        <small v-if="isBlankCPassword">필수 입력값입니다.</small>
        <small v-if="!(isMatchPassword)">비밀번호란과 입력된 값이 다릅니다.</small>
      </div>
      <button
        @click="register"
        type="button"
        class="btn btn-primary">
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
  #signUp {
    width: 90%;
    max-width: 540px;
    margin: 0 auto;
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    form {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 10px 0;
      .user-group {
        margin: 10px 0;
        label {
          font-weight: bold;
        }
        .allergy-check {
          border: none;
        }
        .allergy-option {
          font-weight: normal;    
          border: none;
          margin: 5px 0;     
        }
      }
    }
  }
</style>