<template>
  <div id="signUp">
    <form>
      <div class="form-group">
        <label for="inputEmail">Username</label>
        <input
          type="text"
          class="form-control"          
          placeholder="Username"
          v-model="userinfo.username" />
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="userinfo.email" />
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="userinfo.password" />
      </div>
      <div class="form-group">
        <label for="inputPassword">Repeat Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="userinfo.rPassword" />
      </div>
      <div class="form-group">
        <label>Allergy</label>
        <br />
        <div
          v-for="(allergy, i) in allergies"
          :key="i"
          class="form-check-inline">
          <input           
            type="checkbox"
            class="btn-check"
            :id="allergy"
            :value="allergy"
            v-model="userinfo.checkedAllergies" />
          <label
            class="allergy-option btn btn-outline-secondary"
            :for="allergy">
            {{ allergy }}
          </label>
        </div>
        <br />        
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
  export default {
    data() {
      return {
        allergies: ['난류', '우유', '메밀', '땅콩', '대두', '밀', '고등어', '게', '새우', '돼지', '복숭아', '토마토', '아황산염', '호두', '닭고기', '쇠고기', '오징어', '조개류', '잣'],
        userinfo: {
          username: '',
          email: '',
          password: '',
          rPassword: '', 
          checkedAllergies: [], 
        },       
      }
    },
    methods: {
      // sign up button onclick method
      register() {
        // check blank and incorrect format
        if (this.userinfo.username === '') {
          alert('이름을 입력해주세요!');
          return;
        }
        if (this.userinfo.email === '') {
          alert('이메일을 입력해주세요!');
          return;
        }
        if (this.userinfo.password === '') {
          alert('비밀번호를 입력해주세요!');
          return;
        }
        if (this.userinfo.rPassword === '') {
          alert('비밀번호 확인을 입력해주세요!');
          return;
        }
        if (this.userinfo.password != this.userinfo.rPassword) {
          alert('비밀번호가 일치하지 않아요!');
          return;
        } 
        console.log({
          이름 : this.userinfo.username,
          이메일 : this.userinfo.email,
          비밀번호 : this.userinfo.password,
          알레르기 : this.userinfo.checkedAllergies
        });      
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
    box-shadow: 0px 0px 5px gray;
    form {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 10px 0;
      .form-group {
        margin: 10px 0;
        label {
          font-weight: bold;
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