module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MSTRLAW',
    meta:[
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MSTRLAW\'s Website' },
      //Microsoft favicon tiles
      { name:'msapplication-TileColor', content:'#00aba9' },
      { name:'msapplication-config', content:"/favicons/browserconfig.xml" },
      { name:'theme-color', content:"#ffffff" }
    ],
    /*
    ** Favicons
    */
    link:[
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color:'#5bbad5'},
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicons/favicon.ico' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#383AA7' },
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
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  modules: [
    '@nuxtjs/dotenv'
  ],
  css: [
    '@/assets/app.scss',
    // 'bulma',
  ],
  plugins: [
    '~/plugins/butterCms'
  ],
}
