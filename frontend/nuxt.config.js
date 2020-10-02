const config = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-auth0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  ssr: false,
  plugins: ['~/plugins/auth0.js'],
  auth0: {
    domain: 'rails-nuxt.us.auth0.com',
    clientID: 'yKRM8G1UFPK2omOUk2T05agwAkSoXIpD'
  },

  generate: {
    dir: '../public'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    baseURL: '/'
  }
}

if (process.env.NODE_ENV === 'development')
{
  config.proxy = {
    '/api': 'http://localhost:3000'
  }
}

module.exports = config
