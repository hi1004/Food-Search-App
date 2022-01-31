<template>
  <div class="container">
    <div id="signUp">
      <form>
        <div class="form-group">
          <label for="inputEmail">Username</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            placeholder="Username" />
        </div>
        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password" />
        </div>
        <div class="form-group">
          <label for="inputPassword">Repeat Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password" />
        </div>
        <div class="form-group">
          <label>Allergy</label>
          <div
            v-for="(allergy, i) in Allergies"
            :key="i">
            <input           
              type="checkbox"
              :id="allergy"
              :value="allergy"
              v-model="checkedAllergies" />
            <label :for="allergy">
              {{ allergy }}
            </label>
          </div>
          <span>체크한 알레르기: {{ checkedAllergies }}</span>          
        </div>
        <button
          type="submit"
          class="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Allergies: ['난류', '우유', '메밀', '땅콩', '대두', '밀', '고등어', '게', '새우', '돼지', '복숭아', '토마토', '아황산염', '호두', '닭고기', '쇠고기', '오징어', '조개류', '잣'],
      checkedAllergies: []
    }
  }
}
</script>

<style lang="scss">
  #signUp {
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
      }
    }
  }
</style>