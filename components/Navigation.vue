<template>
  <nav :class="{ 'show-more':showSocialMenu }" class="nav">
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
        
        <p>This is my personal website where I post about stuff I do, see or think.</p>
        
        <p>I'm usually building digital products.</p>
        
        <div>
          <p>You can find me around the web using <a href="#" @click.prevent="toggleSocial">@mstrlaw</a></p>
          <div :class="{ 'visible': showSocialMenu }" class="social">
            <ul>
              <li><a href="https://www.facebook.com/mstrlaw" target="_blank">Facebook</a></li>
              <li><a href="https://github.com/mstrlaw" target="_blank">GitHub</a></li>
              <li><a href="https://gitlab.com/mstrlaw" target="_blank">GitLab</a></li>
              <li><a href="https://www.instagram.com/mstrlaw/" target="_blank">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/lawrencebraun/" target="_blank">LinkedIn</a></li>
              <li><a href="https://medium.com/@mstrlaw" target="_blank">Medium</a></li>
              <li><a href="https://twitter.com/mstrlaw" target="_blank">Twitter</a></li>
            </ul>
          </div>
        </div>

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
        <br>
        <small><p>Powered by <a href="https://buttercms.com" target="_blank"><img style="width: 120px;" src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt="ButterCMS"></a></p></small>
      </div>
    </div>

  </nav>
</template>

<script>
import Logo from '@/components/Logo'
import moment from 'moment'
import { mapGetters } from 'vuex'

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
  computed:{
    ...mapGetters({
      showSocialMenu: 'showSocialMenu',
    }),
  },
  methods:{
    showMore(){ this.showMoreLinks = !this.showMoreLinks },
    toggleSocial(){
      this.$store.dispatch('toggleSocial', !this.showSocialMenu)
    }
  }
}
</script>
