<template>
  <div id="myPage">
    <form>
      <div class="form-group">
        <label for="inputEmail">Username</label>
        <div>{{ userinfo.username }}</div>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <div>{{ userinfo.email }}</div>
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
            v-model="userinfo.checkedAllergies" />
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
        userinfo: {
          username: '',
          email: '',
          checkedAllergies: [], 
        },
      }
    },
    async beforeCreate() {
      // get userinfo from server and set it on this component's data
      try {
        const res = await axios.get('/api/user/user');
        this.userinfo.username = res.data.name;
        this.userinfo.email = res.data.email;
      } catch (error) {
        console.log(error)
      }
      try {
        const res = await axios.get('/api/allergy/manage');
        Object.entries(res.data).forEach(([key, value]) => {
          if (value === true) {
            this.userinfo.checkedAllergies.push(key)
          }
        })
        console.log(res.data)
      } catch (error) {        
        console.log(error);
      }
    },
    methods: {
      async updateUserinfo() {
        let allergiesInfo = {}
        this.userinfo.checkedAllergies.forEach(allergy => {
          allergiesInfo[allergy] = true;
        })
        console.log(allergiesInfo)
        // try {
        //   await axios.put('/api/allergy/manage', allergiesInfo);
        // } catch (error) {
        //   console.log(error)
        // }
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
