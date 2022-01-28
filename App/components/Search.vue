<template>
  <div
    class="container"
    :style="{margin:`${mt}px auto`}">
    <input
      v-model="foodName"
      required
      class="form-control"
      type="text"
      placeholder="검색"
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
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
        type: '제품명',
        number: 10,
        filters: [
          {
            name: 'type',
            items: ['제품명', '알레르기'],
          },
          {
            name: 'number',
            items: [10, 20, 30],
          },
        ],
      };
    },
    props: {
      mt: {
        type: Number,
        default: 0
      }
    },
    methods: {
      apply() {
        this.$router.push('/search/searchResult')
        this.$store.dispatch('food/searchFoods', {
          foodName: this.foodName,
          type: this.type,
          number: this.number,
          year: this.year,
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
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
