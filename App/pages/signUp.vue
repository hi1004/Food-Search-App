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
        <small v-if="isBlankUsername">필수 입력값입니다.</small>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="userinfo.email" />
        <small v-if="isBlankEmail">필수 입력값입니다.</small>
        <small v-if="!isValidEmail">이메일 형식을 확인해주세요.</small>
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="userinfo.password" />
        <small v-if="isBlankPassword">필수 입력값입니다.</small>
      </div>
      <div class="form-group">
        <label for="inputPassword">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="userinfo.cPassword" />
        <small v-if="isBlankCPassword">필수 입력값입니다.</small>
        <small v-if="!(isMatchPassword)">비밀번호란과 입력된 값이 다릅니다.</small>
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
            class="allergy-check btn-check"
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
  import axios from 'axios'
  export default {
    data() {
      return {
        allergies: ['난류', '우유', '메밀', '땅콩', '대두', '밀', '고등어', '게', '새우', '돼지', '복숭아', '토마토', '아황산염', '호두', '닭고기', '쇠고기', '오징어', '조개류', '잣'],
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
      // sign up button onclick method
      register() {
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
        axios.post('https://foodsearch.shop/api/user/register', 
          {
            name: this.userinfo.username,
            email: this.userinfo.email,
            password: this.userinfo.password
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {          
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            alert(error.response.data.email);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);}
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