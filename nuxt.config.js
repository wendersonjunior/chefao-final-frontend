// import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - y',
    title: 'y',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    '@nuxtjs/moment'
  ],

  moment: {
    defaultLocale : 'pt-br' , 
    locales: ['pt-br']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken', // No response do endpoint de login, qual propriedade está contido o token
        },
        user: {
          property: 'user' // No endpoint do usuário, qual propriedade está contida os dados do usuário logado
        },
        endpoints: {
          login: { url: 'http://localhost:3001/login', method: 'post' },
          user: { url: 'http://localhost:3001/users/', method: 'get' }
        }
      }
    },
    redirect: {
      login: '/produtor/autenticacao', // Rota para página de login
      logout: '/produtor/autenticacao', // Rota para quando fizer logout
      home: '/produtor/area-do-produtor' // Rota principal
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#5A32A4',
          secondary: '#7045BA',
          lightgray: '#F5F5F5',
          mediumgray: '#F8F5F9',
          black09: '#50475E',
          black11: '#2A2337'
        }
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
