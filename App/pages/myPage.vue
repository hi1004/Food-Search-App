<template>
  <div class="myPage">
    <client-only>
      <form class="user-form container">
        <div class="user-info-section">
          <div class="user-name">
            {{ username }}<span>님</span>
          </div>
          <div class="user-email">
            {{ email }}
          </div>
        </div>
        <!-- tab menu  -->
        <div class="user-tab-menu">
          <button
            type="button"
            id="allergy-tab"
            class="user-tab-item active"
            @click="clickTab($event)">
            알러지 정보 변경
          </button>
          <button
            type="button"
            id="password-tab"
            class="user-tab-item"
            @click="clickTab($event)">
            비밀번호 변경
          </button>
        </div>            
        <!-- password update tab -->
        <div class="user-password-tab user-tab"></div>
        <!-- allergy info tab -->
        <div class="user-allergy-tab user-tab">
          <div class="user-allergy-section form-group">
            <div
              v-for="(allergy, i) in allergies"
              :key="i"
              class="user-allergy-select form-check-inline">
              <input           
                type="checkbox"
                class="user-allergy-check btn-check"
                :id="allergy"
                :value="allergy[1]"
                v-model="checkedAllergies" />
              <label
                class="user-allergy-option btn btn-outline-secondary"
                :for="allergy">
                {{ allergy[0] }}
              </label>
            </div>
            <br />        
          </div>
          <button
            type="button"
            class="user-allergy-update user-btn"
            @click="updateUserinfo">
            Save
          </button>
        </div>
      </form>
    </client-only>
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
    beforeMount() {    
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
        let allergiesInfo = {
          egg: false,
          milk: false,
          buckwheat: false,
          peanut: false,
          bean: false,
          wheat: false,
          mackerel: false,
          crab: false,
          shrimp: false,
          pork: false,
          peach: false,
          tomato: false,
          sulfite: false,
          walnut: false,
          chicken: false,
          beef: false,
          squid: false,
          shellfish: false,
          pineNut: false,
        }     
        this.checkedAllergies.forEach(allergy => {
          allergiesInfo[allergy] = true;
        })
        try {
          await axios.put('/api/allergy/manage', allergiesInfo);
          alert('변경 성공!')          
        } catch (error) {
          console.log(error)
        }
        this.$router.push('/search');
      },
      clickTab(event) {
        const targetId = event.currentTarget.id;
        const clickedTab = document.querySelector(`#${targetId}`);
        const allTabs = document.querySelectorAll('.user-tab-item');
        allTabs.forEach(tab => {
          tab.classList.remove("active");
        })
        clickedTab.classList.add("active");
      }
    },
  }
</script>
<style lang="scss">
  .myPage {
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Jua", sans-serif;
    .user-form {
      width: 100%;
      max-width: 540px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 0 2rem; 
      .user-info-section {
        height: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .user-name {
          font-size: 3rem;
          flex: 2;
          span {
            font-size: 2rem;
          }
        }
        .user-email {
          font-size: 1rem;
          flex: 1;
        }
      }
      .user-tab-menu {
        display: flex;
        flex-direction: row;
        height: 3rem;
        .user-tab-item {
          flex: 1;
          color: white;
          background: #333333;
          border: none;
          transition: 0.2s;
          &:hover {
            background: #555555;
          }
          &.active {
            color: black;
            background: white;
          }
        }
      } 
      .user-allergy-tab {
        display: flex;
        flex-direction: column;
        align-items: center;        
        .user-allergy-section {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          margin: 2rem 0;
          .user-allergy-select {
            margin: 0; 
            .user-allergy-option {
              width: 5rem;
              height: 2.5rem;
              text-align: center;
              margin: 0.7rem;
            }
          }          
        }        
      }
      .user-tab {        
        .user-btn {
          width: 100%;
          height: 3rem;
          color: white;
          background: #333333;
          border: none;
          transition: 0.2s;
          &:hover {
            background: #555555;
          }
        }
      }
    }
  }
</style>
