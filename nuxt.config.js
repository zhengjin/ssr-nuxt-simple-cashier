module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '@/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    // 'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/antd-ui',
    '@/plugins/i18n',
  ],
  router: {
    middleware: ['i18n', 'skeleton']
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map';
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    },
    babel: {
      presets({isServer}) {
        return [
          [
            "@nuxt/babel-preset-app", {loose: true}
          ]
        ]
      }
    }
  }
};
