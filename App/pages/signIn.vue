<template>
  <div class="signIn">
    <form class="user-form">    
      <h1 class="user-title">
        회원 로그인
      </h1>
      <div class="user-box">
        <div class="user-inputbox">
          <label class="user-input">
            <input
              type="email"
              id="inputEmail"
              v-model.trim="email" />
            <span class="label">이메일 아이디</span>
            <div class="underline"></div>
          </label>
          <label class="user-input">
            <input
              type="password"
              id="inputPassword"
              v-model.trim="password" />
            <span class="label">비밀번호</span>
            <div class="underline"></div>
          </label>
        </div>
        <button
          @click="signIn"
          type="button"
          class="user-button">
          로그인
        </button>
      </div>
      <button
        @click="toSignUp"
        type="button"
        class="user-toSignUp">
        회원가입
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email : '',
        password : '',
      }
    },
    methods: {
      signIn() {
        this.$store.dispatch('signIn/userLogin', {
          email: this.email,
          password: this.password,
        });
      },
      toSignUp() {
        this.$router.push('./signUp')
      },      
    }
  }
</script>

<style lang="scss">
  .signIn {
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
      height: 25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .user-box {
        width: 100%;
        height: 7rem;
        display: flex;
        flex-direction: row;        
        .user-inputbox {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 4;
          margin-right: 0.5rem;
          .user-input {  
            position: relative;          
            input {
              width: 100%;
              border: none;
              height: 3rem;
              position: relative;
              &:focus {
                outline: none;              
              }
              & ~ .label {
                position: absolute;   
                top: 1rem;
                left: 0.1rem;   
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
              }              
              &:focus {
                & ~ .label {
                  color: $primary;
                  font-size: 0.7rem;
                  top: -0.5rem;                
                }
                & ~ .underline { 
                  background-color: $primary;
                  transform: scaleY(2);                                  
                }    
              }   
            }          
          }
        }
        .user-button {
          flex: 1;
        }
      }
      .user-toSignUp {
        width: 100%;
        height: 4rem;
      }
    }
    button {
      border: none;
      border-radius: 0.2rem;
      background-color: #333333;
      color: white;
      transition: 0.5s;
      &:hover {
        background-color: #555555
      }
    }
  }
</style>
