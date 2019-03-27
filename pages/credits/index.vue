<template>
  <section class="container">
    <h1 class="headline">CREDITS</h1>

    <div class="push-top">
      <p>This website uses a bunch of technology and assets which are recognized here.</p>

      <p><b>Framework</b>: <a href="https://nuxtjs.org/" target="_blank">Nuxt</a></p>
      <p><b>Hosting</b>: <a href="https://www.digitalocean.com/" target="_blank">Digital Ocean</a></p>
      <p><b>CMS/CDN</b>: <a href="https://buttercms.com/" target="_blank">ButterCMS</a></p>
      <p>
        <b>'M' Icon</b> made by <a href="http://www.freepik.com" title="Freepik" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a>,  licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
      </p>
    </div>

  </section>
</template>

<script>
import moment from 'moment'
import { menuTransition } from '@/mixins/menuTransition'

export default {
  name: 'Credits',
  mixins: [ menuTransition ],
  transition: 'page',
  head(){
    return{
      titleTemplate: 'Credits —— mstrlaw.com'
    }
  }
}
</script>
