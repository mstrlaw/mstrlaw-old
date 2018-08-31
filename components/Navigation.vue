<template>
  <nav :class="{ 'show-more':showMoreLinks }" class="nav">
    <div v-if="showBreadcrumb" class="breadcrumbs">
      <nuxt-link to="/">&lt; back</nuxt-link>
    </div>
    <a href="#" class="menu-close" @click.prevent="showMore">close</a>
    <div class="nav-mobile">
      <a href="/" class="brand">
        <div class="logo-wrapper">
          <Logo />
        </div>
      </a>
      <a v-if="showNav" href="#" class="toggle" @click.prevent="showMore">
        menu
      </a>
    </div>
    
    <div v-if="showNav" :class="{ 'show-more':showMoreLinks }" class="nav-content">
      <div class="nav-disclaimer">
        <h2>Hey there, <i class="twa twa-wave" /></h2>
        <h3>I'm Lawrence.</h3>
        
        <p>This is my personal website where I post about stuff.</p>
        
        <p>I'm usually building digital products.</p>
        
        <p>You can find me around the web using <a href="#">@mstrlaw</a></p>
      </div>
      
      <div class="nav-footer">
        <a href="#" class="more" @click.prevent="showMore">More?</a>
        <div class="footer-links">
          <nuxt-link to="/about">About Me</nuxt-link>
          <nuxt-link to="/credits">Credits</nuxt-link>
          <nuxt-link to="/privacy">Privacy</nuxt-link>
        </div>
        <div class="nav-brand">
          <nuxt-link to="/">
            <div class="logo-wrapper">
              <Logo />
            </div>
          </nuxt-link>
        </div>
        <small>© mstrlaw.com — {{ currentYear }}</small>
      </div>
    </div>

  </nav>
</template>

<script>
import Logo from '@/components/Logo'
import moment from 'moment'

export default {
  name: 'Navigation',
  components:{
    Logo
  },
  props:{
    showBreadcrumb:{
      type: Boolean,
      default: false
    },
    showNav:{
      type: Boolean,
      default: true
    },
  },
  data(){
    return{
      showMoreLinks: false,
      currentYear: moment().format('YYYY')
    }
  },
  methods:{
    showMore(){ this.showMoreLinks = !this.showMoreLinks }
  }
}
</script>
