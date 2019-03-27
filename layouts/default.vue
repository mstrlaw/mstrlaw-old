<template>
  <div>
    <Navigation />
    <div :class="firstRender">
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
  scrollToTop: true,
}
</script>
