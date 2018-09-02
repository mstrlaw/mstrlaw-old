<template>
  <div>
    <Navigation :show-breadcrumb="true" :show-nav="false"/>
    <div class="container full">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },
  scrollToTop: true,
}
</script>
