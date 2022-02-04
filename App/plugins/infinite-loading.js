import Vue from 'vue';
import InfiniteLoading from 'vue-infinite-loading';

Vue.component('InfiniteLoading', InfiniteLoading);

// vue-infinite-loading custom
Vue.use(InfiniteLoading, {
  slots: { noResults: '', noMore: '' },
  props: {
    spinner: 'bubbles',
    directioin: 'bottom',
  },
});
