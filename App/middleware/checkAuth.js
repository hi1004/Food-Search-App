export default function ({ store }) {
  store.app.router.beforeEach((to, from, next) => {
    store.dispatch('signIn/setAuthorized');
    next();
  });
}
