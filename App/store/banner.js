const IMG_URL = 'https://raw.githubusercontent.com/hi1004/Food-Search-App/master/App/assets/images/';
export default {
  namespaced: true,
  state: () => ({
    bannerURL: [`${IMG_URL}banner01.png`, `${IMG_URL}banner02.png`, `${IMG_URL}banner03.png`],
  }),
};
