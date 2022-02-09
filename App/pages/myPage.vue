<template>
  <div id="myPage">
    <form>
      <div class="form-group">
        <label for="inputEmail">Username</label>
        <div>{{ username }}</div>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <div>{{ email }}</div>
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
            :value="allergy[1]"
            v-model="checkedAllergies" />
          <label
            class="allergy-option btn btn-outline-secondary"
            :for="allergy">
            {{ allergy[0] }}
          </label>
        </div>
        <br />        
      </div>
      <button
        type="button"
        class="btn btn-primary"
        @click="updateUserinfo">
        Save
      </button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex';

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
        allergies: [
          ['난류', 'egg'],
          ['우유', 'milk'],
          ['메밀', 'buckwheat'],
          ['땅콩', 'peanut'],
          ['대두', 'bean'],
          ['밀', 'wheat'],
          ['고등어', 'mackerel'],
          ['게', 'crab'],
          ['새우', 'shrimp'],
          ['돼지', 'pork'],
          ['복숭아', 'peach'],
          ['토마토', 'tomato'],
          ['아황산염', 'sulfite'],
          ['호두', 'walnut'],
          ['닭고기', 'chicken'],
          ['쇠고기', 'beef'],
          ['오징어', 'squid'],
          ['조개류', 'shellfish'],
          ['잣', 'pineNut']
        ],        
        checkedAllergies: [],         
      }
    },
    created() {    
      Object.entries(this.allergiesInfo).forEach(([key, value]) => {
        if (value === true) {
          this.checkedAllergies.push(key)
        }
      })
    },
    beforeUpdate() {
      Object.entries(this.allergiesInfo).forEach(([key, value]) => {
        if (value === true) {
          this.checkedAllergies.push(key)
        }
      })
    },
    computed: {
      ...mapState('signIn', ['isAuthorized', 'username', 'email', 'allergiesInfo']),
    },
    methods: {
      async updateUserinfo() {
        let allergiesInfo = {}
        this.checkedAllergies.forEach(allergy => {
          allergiesInfo[allergy] = true;
        })
        console.log(allergiesInfo)
        try {
          await axios.put('/api/allergy/manage', allergiesInfo);
          alert('변경 성공!')          
        } catch (error) {
          console.log(error)
        }
      }
    },
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
