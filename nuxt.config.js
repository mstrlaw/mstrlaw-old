const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
      title: 'Lawrence Braun - MSTRLAW',
      meta:[
        { name:'robots', content:'index, follow' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
        { hid: 'description', name: 'description', content: 'Lawrence Braun\'s personal website'  },
        { hid: 'author', name: 'author', content: 'Lawrence Braun' },
        // Opengraph
        { hid: 'og:title', name: 'og:title', content: 'Lawrence Braun\'s personal website' },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Mstrlaw' },
        { hid: 'og:url', name: 'og:url', content: 'https://mstrlaw.com' },
        /*
        { hid: 'og:description', name: 'og:description', content: 'Extract business intelligence from the media landscape' },
        { hid: `og:image`, name: 'og:image', content: '/images/logo_card.jpg' },
        { hid: 'twitter:card', name: 'twitter:card', content: '/images/logo_card.jpg' },
        */

        //Microsoft favicon tiles
        { name:'msapplication-TileColor', content:'#00aba9' },
        { name:'msapplication-config', content:"/favicons/browfrconfig.xml" },
        { name:'theme-color', content:"#ffffff" }
      ],
      link:[
        /* Favicons */
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color:'#5bbad5'},
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      ],
    },

  /*
  ** Customize the progress-bar color
  */
  loading: false,
  
  /*
  ** Environment varialbes
  */
  env: {
    HOTJAR_ID: process.env.HOTJAR_ID,
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/butterCms',
    {
      src: '@/plugins/apexcharts',
      ssr: false
    },
    {
      src: '@/plugins/mediumZoom',
      ssr: false
    },
    {
      src: '@/plugins/hotjar',
      ssr: false
    },
    {
      src: '@/plugins/tooltip',
      ssr: false
    },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/ngrok'
  ],
  /*
  ** Router configuration
  */
  router: {
    middleware: 'cookies'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
