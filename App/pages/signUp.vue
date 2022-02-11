<template>
  <div class="signUp">
    <form class="user-form container">
      <h1 class="user-title">
        회원가입
      </h1>      
      <div class="user-inputbox">
        <label class="user-input">        
          <input
            type="text"         
            v-model.trim="userinfo.username"
            required />
          <span class="label">이름</span>
          <div class="underline"></div>        
        </label>
        <div class="msgbox">
          <small v-if="isBlankUsername">필수 입력값입니다.</small>
        </div>
      </div>     
      <div class="user-inputbox">
        <label class="user-input">
          <input
            type="text"
            v-model.trim="userinfo.email"
            required />
          <span class="label">이메일 아이디</span>
          <div class="underline"></div>          
        </label>
        <div class="msgbox">
          <small v-if="isBlankEmail">필수 입력값입니다.</small>
          <small v-if="!isValidEmail">이메일 형식을 확인해주세요.</small>
        </div> 
      </div>      
      <div class="user-inputbox">
        <label class="user-input">
          <input
            type="password"
            v-model.trim="userinfo.password"
            required />
          <span class="label">비밀번호</span>
          <div class="underline"></div>        
        </label>
        <div class="msgbox">
          <small v-if="isBlankPassword">필수 입력값입니다.</small>
        </div>
      </div>       
      <div class="user-inputbox">
        <label class="user-input">        
          <input
            type="password"
            v-model.trim="userinfo.cPassword"
            required />
          <span class="label">비밀번호 확인</span>
          <div class="underline"></div>              
        </label> 
        <div class="msgbox">
          <small v-if="isBlankCPassword">필수 입력값입니다.</small>
          <small v-if="!(isMatchPassword)">비밀번호란과 입력된 값이 다릅니다.</small>
        </div> 
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
      padding: 0 2rem;            
      .user-inputbox {
        width: 100%;
        .user-input {
          width: 100%;  
          position: relative;          
          input {
            width: 100%;
            border: none;
            border-bottom: solid 1px gray;
            height: 3rem;
            position: relative;
            &:focus {
              outline: none;              
            }
            & ~ .label {
              position: absolute; 
              font-size: 1.2rem;  
              left: 0.1rem;
              top: -0.7rem;    
              pointer-events: none;
              transition: 0.2s;       
            }              
            & ~ .underline {
              background-color: gray;
              width: 100%;
              height: 0.05rem;
              position: absolute;
              bottom: 0;
              left: 0; 
              transition: 0.2s;
              transform: scale(0);           
            }              
            &:focus {
              & ~ .label {
                color: $primary;                             
              }
              & ~ .underline { 
                background-color: $primary;
                transform: scaleY(2);                                  
              } 
            }
            &:valid {
              & ~ .label {
                font-size: 0.7rem;
                top: -0.5rem;                
              }
            }   
          }
        }     
        .msgbox {
          height: 1.5rem;
          margin-bottom: 1rem;
          color: red;
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
      transition: 0.5s;
      &:hover {
        background-color: #555555
      }
    }
  }
</style>