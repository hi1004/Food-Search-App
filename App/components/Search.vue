<template>
  <div class="container">
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
        <option value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <input
      type="submit"
      class="btn btn-primary"
      value="Search"
      @click="apply" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        foodName: '',
        type: '제품명',
        number: 10,
        year: '',
        filters: [
          {
            name: 'type',
            items: ['제품명', '제조원', '유형'],
          },
          {
            name: 'number',
            items: [10, 20, 30],
          },
          {
            name: '??',
          },
        ],
      };
    },
    methods: {
      apply() {
        // if(this.foodName !== '') {
        this.$store.dispatch('food/searchFoods', {
          foodName: this.foodName,
          type: this.type,
          number: this.number,
          year: this.year,
        });
        // }
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
