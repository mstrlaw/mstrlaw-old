<template>
  <div>
    <Navigation :showBreadcrumb="true"/>
    <div class="container">
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
  middleware: 'hideLinks',
  scrollToTop: true,
}
</script>
