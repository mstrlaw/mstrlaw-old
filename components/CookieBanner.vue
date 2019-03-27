<template>
  <div
    :class="{ 'display': displayBanner }"
    class="banner-wrapper"
  >
    <div class="banner">
      <div>
        <b>Cookies!</b> 🍪
      </div>
      <p>Yes, this website uses of Cookies for analytics purposes.</p>
      <div class="actions">
        <nuxt-link
          to="/privacy"
          class="pp"
        >Check Privacy Policy</nuxt-link>
        <a
          href="#"
          class="cta"
          @click.prevent="setCookieConsent"
        >Agree</a>
      </div>
    </div>
  </div>  
</template>

<script>
  import Cookie from 'js-cookie'

  export default {
    name: 'CookieBanner',
    data() {
      return {
        displayBanner: false
      }
    },
    mounted() {
      setTimeout( () => {
        this.displayBanner = !this.$store.getters.acceptsCookies
      }, 4500)
    },
    methods: {
      setCookieConsent() {
        Cookie.set('mstrlaw', JSON.stringify({ accepts: true, timestamp: new Date() }) )
        this.$store.commit('SET_COOKIE_CONSENT')
        this.displayBanner = false
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/utils/_mixins.scss";
  @import "@/assets/imports/_variables.scss";

  .banner-wrapper{
    position: fixed;
    display: flex;
    bottom: 10px;
    left: 10px;
    margin: 0 auto;
    width: 100%;
    padding: 0 10vw;
    transform: translateY(350px);
    transition: transform .5s;

    &.display{
      transform: translateY(0);
      transition: transform .5s;
      transition-delay: .5s;
    }

    .banner{
      background: lighten(#283439, 80%);
      padding: 10px 15px;
      border-radius: 4px;
      width: 30%;
      @include shadow();

      p{
        margin-bottom: 5px;
      }

      .actions{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .pp{
          color: $gray-light;
        }

        .cta{
          font-weight: bold;
        }
      }

      @media #{$large} {
        width: 40%;
      }
      @media #{$small} {
        width: 95%;
      }
    }

    @media #{$xsmall} {
      padding: 0;
    }
  }
</style>
