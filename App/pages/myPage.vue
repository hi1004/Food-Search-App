<template>
  <div id="myPage">
    <form>
      <div class="form-group">
        <label for="inputEmail">Username</label>
        <input
          type="text"
          class="form-control"     
          placeholder="Username"
          v-model.trim="userinfo.username" />
        <small v-if="isBlankUsername">필수 입력값입니다.</small>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model.trim="userinfo.email" 
          disabled />
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
        type="button"
        class="btn btn-primary">
        Save
      </button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    middleware({ store, redirect }) {
      if (!store.state.signIn.isAuthorized) {
        if (typeof window !== 'undefined') {
          alert("로그인부터 하세요 도라에몽아");
        }        
        return redirect("/signIn");
      }
    },
    data() {
      return {
        allergies: ['난류', '우유', '메밀', '땅콩', '대두', '밀', '고등어', '게', '새우', '돼지', '복숭아', '토마토', '아황산염', '호두', '닭고기', '쇠고기', '오징어', '조개류', '잣'],
        userinfo: {
          username: '',
          email: '',
          checkedAllergies: [], 
        },
        isBlankUsername: true,
      }
    },
    async beforeCreate() {
      try {
        const res = await axios.get('/api/user/user');
        this.userinfo.username = res.data.name;
        this.userinfo.email = res.data.email;
      } catch (error) {
        console.log(error)
      }
    },
    watch: {
      userinfo: {
        deep: true,
        handler(newData) {
          //check required value is blank
          this.isBlankUsername = newData.username === '';       
        }
      }
    }
  }
</script>
<style lang="scss">
  #myPage {
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
