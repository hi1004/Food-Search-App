<template>
  <div
    class="container"
    :style="{ margin: `${mt}px auto 0 auto` }">
    <input
      v-model.trim="foodName"
      ref="search"
      class="form-control"
      type="text"
      placeholder="검색"
      @keyup.enter="apply" />
    <button
      href=""
      class="btn btn-primary"
      @click="apply">
      Search
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        foodName: '',
        number: 12,
        filters: [
          // {
          //   name: 'number',
          //   items: [10, 20, 30],
          // },
        ],
      };
    },
    props: {
      mt: {
        type: Number,
        default: 0,
      },
    },
    mounted() {
      this.$store.dispatch('cursor/mouse');
    },
    methods: {
      apply() {
        this.$router.push('/search');
        this.$refs.search.focus();

        this.$store.commit('search/resetFood');
        this.$store.dispatch('search/searchFoods', {
          foodName: this.foodName,
          number: this.number,
        });
      },
    },
    directives: {
      focus: {
        // 디렉티브 정의
        inserted: function (el) {
          el.focus();
        },
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    padding-top: 100px;
    margin: 0;
    > * {
      margin-right: 10px;
      font-size: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
    .selects {
      display: flex;
      select {
        width: 120px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .btn {
      width: 120px;
      height: 50px;
      flex-shrink: 0;
      font-weight: 700;
      color: $white;
    }

    @include media-breakpoint-down(lg) {
      display: block;
      input {
        margin-right: 0;
        margin-bottom: 10px;
      }
      .selects {
        margin-right: 0;
        margin-bottom: 10px;
        select {
          width: 100%;
        }
      }
      .btn {
        width: 100%;
      }
    }
  }
</style>
