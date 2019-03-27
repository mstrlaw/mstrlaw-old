<template>
  <div>
    <Navigation />
    <div :class="[firstRender, { 'blur': openMenu === 'open' }]">
      <nuxt/>
    </div>
    <CookieBanner />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CookieBanner from '@/components/CookieBanner'
import Navigation from '@/components/Navigation'

export default {
  components: {
    CookieBanner,
    Navigation
  },
  head() {
    return {
      bodyAttrs: {
          class: this.$router.currentRoute.name
      },
    }
  },
  data() {
    return {
      visible: false,
      firstRender: 'first-render'
    }
  },
  mounted() {
    setTimeout( () => {
      this.firstRender = ''
      this.visible = true
    }, 500)
  },
  computed: {
    ...mapGetters({
      openMenu: 'openMenu',
    })
  },
  scrollToTop: true,
}
</script>

<style lang="scss">
  .blur{
    -webkit-filter: blur(3px);
    filter: blur(3px);
    transition: filter .5s;
  }
</style>
