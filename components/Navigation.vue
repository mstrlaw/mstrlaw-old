<template>
  <nav
    :class="menuClass"
    class="nav"
  >
    <div class="toggle">
      <a
        :class="menuClass"
        href="#"
        class="anchor"
        @click.prevent="toggleMenu"
      >
        <div class="anchor-wrapper">
          <div class="inner" />
        </div>
      </a>
    </div>
    <div class="nav-body">
      <a
        href="#"
        :class="{ 'active': navClass === 'index' }"
        class="nav-wrapper"
        @click.prevent="navigate('index')"
      >
        <span class="nav-link">
          Home
        </span>
      </a>
      <a
        href="#"
        :class="{ 'active': navClass === 'about' }"
        class="nav-wrapper"
        @click.prevent="navigate('about')"
      >
        <span class="nav-link">
          About
        </span>
      </a>
      <a
        href="#"
        :class="{ 'active': navClass === 'lab' }"
        class="nav-wrapper"
        @click.prevent="navigate('lab')"
      >
        <span class="nav-link">
          Lab
        </span>
      </a>
      <span class="nav-wrapper">
        <div class="disclaimer">
          <div class="small-print">
            <a
              @click.prevent="navigate('privacy')"
            >Privacy</a>
            <a
              @click.prevent="navigate('credits')"
            >Credits</a>
          </div>
          <small>
            mstrlaw — Lawrence Braun © {{ currentYear }}
          </small>
        </div>
      </span>
    </div>
    <audio
      ref="audioclick"
      class="forbidden"
      src="https://scontent.xx.fbcdn.net/v/t39.12897-6/37928975_1705007356284191_7710680930251177984_n.wav/Click-High-Fast.wav?_nc_cat=102&_nc_ht=scontent.xx&oh=cc63b59d52c54000cfc6efce817f4d04&oe=5D193295" />
  </nav>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',
  data(){
    return{
      navClass: '',
      openMenu: false,
      menuState: '',
      showMoreLinks: false,
      currentYear: moment().format('YYYY')
    }
  },
  computed: {
    ...mapGetters({
      menuClass: 'openMenu',
    })
  },
  methods:{
    toggleMenu() {
      if (this.menuClass === 'open') {
        this.$store.commit('SET_MENU_STATE', '')
      } else {
        this.$store.commit('SET_MENU_STATE', 'open')
      }
    },
    navigate(routeName) {
      this.$refs.audioclick.play()

      this.$store.commit('SET_MENU_STATE', 'fade-out')

      this.navClass = routeName
      
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/imports/_variables.scss";

  .nav{
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    top: 0;
    right: 0;
    width: 1px;
    z-index: 100;
    z-index: 1;

    &.fade-out{
      opacity: 0;
      transition: opacity .3s;
      .nav-body{
        opacity: 0;
        transform: translateX(0%);
        transition: transform .5s, opacity .5s;
        .nav-wrapper{
          transform: translateX(0%);
        }
      }
    }

    &.open{
      width: 100%;
      .nav-body{

        right: 0px;
        opacity: 1;
        transform: translateX(0%);
        transition: transform .5s, opacity .5s;

        &:after{
          opacity: 1;
          transition: opacity 5s;
        }

        .nav-wrapper{
          transform: translateX(0%);
          &:nth-of-type(1){
            transition: transform .5s;
          }
          &:nth-of-type(2){
            transition: transform .6s;
          }
          &:nth-of-type(3){
            transition: transform .7s;
          }
          &:nth-of-type(4){
            transition: transform .8s;
          }
        }
      }
    }

    .nav-body{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100vh;
      transform: translateX(120%);
      transition: transform .5s;
      transition-delay: .3s;
      right: -50px;
      opacity: 0;

      &:before{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background: white;

        background-size: 400% 400%;
        opacity: .4;
        z-index: 10;
        -webkit-animation: animatedGradient 30s ease infinite;
        -moz-animation: animatedGradient 30s ease infinite;
        animation: animatedGradient 30s ease infinite;
      }

      &:after{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .2);
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGUlEQVQIW2NkYGD4z8DAwMiABFA4MHEKBQFmoAEGdnHj3wAAAABJRU5ErkJggg==);
        background-repeat: repeat;
        z-index: 1;
        opacity: 0;
        transition: opacity .3s;
      }

    }
    
    .nav-wrapper{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 15px 25px;
      background: transparent;
      width: 100%;
      height: 25%;
      z-index: 25;
      transform: translateX(100%);


      .nav-link{
        font-size: 8vh;
        text-transform: uppercase;
        font-weight: 500;
        position: relative;
        color: #FFF;
        text-shadow: 0 1px 0 #ccc, 
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);

        &:after{
          content: '';
          display: block;
          position: absolute;
          bottom: 41%;
          left: -10%;
          width: 0%;
          height: 10%;
          transform: skew(-10deg);
          z-index: -1;
          box-shadow: none;
          transition: width .3s, box-shadow .5s;
        }

        &:before{
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 0%;
          z-index: -10;
          border-radius: 50%;
          transition: all .5s;
        }

        &::-moz-selection {
          background: #283439;
          color: #FFF;
        }
        &::selection {
          background: #283439;
          color: #FFF;
        }

        @media #{$small} {
          &:after{
            width: 120%;
            transition: width .3s;
          }
        }
      }

      .disclaimer{
        font-size: 1.5em;
        text-align: center;
        color: $black;

        .small-print > a {
          font-size: 80%;
          text-decoration: none;
          border-bottom: 2px solid #ffff00;

          &::-moz-selection {
            background: #283439;
            color: #FFF;
          }
          &::selection {
            background: #283439;
            color: #FFF;
          }
          
          &:hover{
            border-color: #aa00ff;
            cursor: pointer;
          }
        }

        small{
          &::-moz-selection {
            background: #283439;
            color: #FFF;
          }
          &::selection {
            background: #283439;
            color: #FFF;
          }
        }
      }

      &:hover{
        .nav-link{
          &:after{
            width: 120%;
            transition: width .3s;
          }
          @media #{$small} {
            &:after{
              width: 0%;
              transition: width .3s;
            }
          }
        }
      }

      &:focus{
        .nav-link{
          &:before{
            width: 150vw;
            height: 110vh;
            left: -50vw;
            border-radius: 5px;
            transition: width .5s, height .5s, left .5s, top .5s, border-radius .7s;
          }
        }
      }

      &:nth-of-type(1){
        transition: transform 1s;
        .nav-link:after{
          background: #29b6f6;
          box-shadow: 2px 2px 0px 0px #0086c3;
        }
      }

      &:nth-of-type(2){
        transition: transform .9s;
        .nav-link:after{
          background: #f50057;
          box-shadow: 2px 2px 0px 0px #bb002f;
        }
      }
      &:nth-of-type(3){
        transition: transform .7s;
        .nav-link:after{
          background: #aa00ff;
          box-shadow: 2px 2px 0px 0px #7200ca;
        }
      }
      &:nth-of-type(4){
        transition: transform .8s;
        .nav-link:after{
          background: #ffff00;
          box-shadow: 2px 2px 0px 0px #c7cc00;
        }
      }
    }
    @media #{$medium-up} {
      .nav-wrapper{
        width: 50%;
        height: 50vh;
      }
    }
  }

  .toggle{
    position: absolute;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    z-index: 50;
  }

  .anchor {
    margin-left: auto;
    font: inherit;
    display: inline-block;
    overflow: visible;
    margin: 0;
    padding: 21px;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: .15s;
    transition-property: opacity, filter;
    text-transform: none;
    color: inherit;
    background-color: transparent;
    z-index: 10;
    border: 0;
    
    &:active{
      background: transparent;
    }

    &:hover{
      opacity: .9;
    }

    &.open{
      &:hover {
          opacity: .9;
      }

      .inner:after,
      .inner:before {
          transition: bottom .08s ease-out, top .08s ease-out, opacity 0s linear .08s;
          opacity: 0
      }

      .inner:before {
          top: 0;
      }

      .inner:after {
          bottom: 0;
      }
    }
  }

  .anchor-wrapper {
      position: relative;
      display: inline-block;
      width: 20px;
      height: 15px;
  }

  .inner,
  .inner:after,
  .inner:before {
      position: absolute;
      width: 24px;
      height: 3px;
      transition-timing-function: ease;
      transition-duration: .15s;
      transition-property: transform;
      border-radius: 4px;
      background-color: #283439;
  }

  .inner {
      top: 50%;
      display: block;
      margin-top: -2px;
      
      &:after,
      &:before {
          display: block;
          content: '';
          transition: bottom .08s ease-out 0s, top .08s ease-out 0s, opacity 0s linear
      }

      &:before {
          top: -8px;
      }

      &:after {
          bottom: -8px;
      }
  }
</style>
