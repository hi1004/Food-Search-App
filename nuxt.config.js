export default {
  srcDir: './App',
  head: {
    title: 'Nuxt App',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1, maximum-scale=1 shrink-to-fit=no',
      },
      { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: process.env.CLIENT_URL },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Do+Hyeon&family=Noto+Sans+KR&family=Roboto:wght@400;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/App.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins',
    { src: '~/plugins/infinite-loading', ssr: false },
    { src: '~/plugins/persistedState.client.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  styleResources: {
    scss: ['~/assets/scss/App.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets: ['@babel/preset-env'],
      plugins: [['@babel/plugin-transform-runtime']],
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    },
  },
  serverMiddleware: [
    {
      path: '/api/food',
      handler: '~/server-middleware/food.js',
    },
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': { target: 'https://foodsearch.shop/api/', pathRewrite: { '^/api/': '' } },
  },
  router: {
    middleware: 'checkAuth',
  },
};
