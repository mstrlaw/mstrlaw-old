<template>
  <div>
    <section class="container">
      <h1 class="headline">HELLO</h1>
      <div class="push-top about-description">
        <p>Lawrence Braun de Almeida.<br>Swiss born with French/Portuguese nationality — mostly European.</p>
        
        <p>A lot of things interest me when it comes to technology (in no particular order):<br>information extraction (scraping) &amp; processing, time tracking, UX/UI, data visualization, AI/ML and boring stuff like tech regulation &amp; legislation.</p>
        
        <p>When not working, I spend time with my significant other, read, play with my 3 cats or do some gardening. When possible I'll catch some waves too.</p>
      </div>
    </section>
    <StatsArea />
  </div>
</template>

<script>
import moment from 'moment'
import StatsArea from '@/components/StatsArea'
import { menuTransition } from '@/mixins/menuTransition'

export default {
  name: 'About',
  mixins: [ menuTransition ],
  transition: { name: 'page' },
  components: {
    StatsArea
  },
  head(){
    return{
      titleTemplate: 'About —— mstrlaw.com'
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/imports/_variables.scss";

  .faq-section{
    .about-description{
      color: $black;
      text-shadow: none;
    }
  }

  .about-description{
    color: $white;
    font-size: 1.2em;
    text-shadow: 1px 0px 0px rgba(40, 52, 57, 1),
                -1px 0px 0px rgba(40, 52, 57, 1),
                0px 1px 0px rgba(40, 52, 57, 1),
                0px -1px 0px rgba(40, 52, 57, 1);
  }

  .flex {
    display: flex;
  }
  
  .image-2{
    @media #{$small} {
      right: -50%;
      z-index: -2;
    }
  }
</style>
