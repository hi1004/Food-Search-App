<template>
  <div class="signIn">
    <form class="user-form container">    
      <h1 class="user-title">
        회원 로그인
      </h1>
      <div class="user-box">
        <div class="user-inputbox">
          <label class="user-input">
            <input
              @keyup.enter="signIn"
              type="text"
              id="inputEmail"
              v-model.trim="email"
              required />
            <span class="label">이메일 아이디</span>
            <div class="underline"></div>
          </label>
          <label class="user-input">
            <input
              @keyup.enter="signIn"
              type="password"
              id="inputPassword"
              v-model.trim="password"
              required />
            <span class="label">비밀번호</span>
            <div class="underline"></div>
          </label>
        </div>
      </div>
      <button
        @click="signIn"
        type="button"
        class="user-button">
        로그인
      </button>
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
    },

  }
</script>

<style lang="scss">
  .signIn {
    width: 100vw;
    min-height: 80vh;
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
      padding: 0 2rem;
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
              border-bottom: solid 1px gray;
              height: 3rem;
              position: relative;
              &:focus {
                outline: none;              
              }
              & ~ .label {
                position: absolute;   
                top: 1rem;
                left: 0.1rem;   
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
                  font-size: 0.7rem;
                  top: -0.5rem;                
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
        }
        
      }
      .user-toSignUp, .user-button {
       
        width: 100%;
        height: 4rem;
        
      }
      .user-button {
          background-color: $primary;
          transition: 0.3s;
        }
    }
    button {
      border: none;
      border-radius: 0.2rem;
      background-color: #333333;
      color: white;
      transition: 0.5s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
