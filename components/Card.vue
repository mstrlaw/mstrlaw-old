<template>
  <div
    ref="card"
    :class="[size, { 'visible': display }]"
    class="card-wrapper"
    :style="{ transform: `perspective(600px) rotateX(${ -rx }deg) rotateY(${ ry }deg)`, transition: `transform 5s;` }"
  >
    <div
      class="card"
      @mouseenter="bindEvent($event)"
      @mouseleave="unbindEvent"
    >
      <nuxt-link
        :to="{ name:'post-slug', params: { slug:slug} }"
        class="nuxt-link"
      >
        <h2
          class="title"
          :style="{ transform: `translate3d(${ rx * 5 }px, ${ ry * 5 }px, 0)`}"
        >{{ title }}</h2>
        <img
          :src="image"
          alt="Project preview"
          :style="{ transform: `rotateX(${ -rx }deg) rotateY(${ -ry }deg) translate3d(${ rx * 2 }px, ${ ry * 2 }px, 0)`}"
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      title: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      },
      slug: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'w-half'
      },
      delay: {
        type: Number,
        default: 0
      },
    },
    data() {
      return {
        display: false,
        w: 0,
        h: 0,
        cx: 0,
        cy: 0,
        rx: 0,
        ry: 0,
        dx: 0,
        dy: 0,
      }
    },
    mounted() {
      this.resize()
      setTimeout( () => {
        this.display = true
      }, this.delay)
    },
    methods: {
      tilt() {
        this.rx = this.dy * 2;
        this.ry = this.dx * 2;        
      },
      bindEvent(e) {
        window.addEventListener('mousemove', this.move)
        window.addEventListener('touchmove', this.move)
      },
      unbindEvent(e) {
        window.removeEventListener('mousemove', this.move)
        window.removeEventListener('touchmove', this.move)
        this.leave()
      },
      move(e) {
        let pointer = ( e.touches && e.touches[0] || e )
        this.dx = ((pointer.pageX - this.cx) / this.w) * 2
        this.dy = ((pointer.pageY - this.cy) / this.h) * 2
        this.tilt()
      },
      leave(){
        this.dy = 0
        this.dx = 0
        this.tilt()
      },
      resize() {
        this.w = this.$refs.card.offsetWidth
        this.h = this.$refs.card.offsetHeight
        this.cx = this.$refs.card.offsetLeft + ( this.w/2 )
        this.cy = this.$refs.card.offsetTop + ( this.h/2 )
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/imports/_variables.scss";
  
  .cards-container{
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .card-wrapper{
    opacity: 0;
    padding: 15px;
    position: relative;
    height: 35vh;
    transition: opacity .5s;

    &.w-full{
      width: 100%;
    }

    &.w-half{
      width: 50%;

      @media #{$medium} {
        width: 100%;
      }
    }

    &.visible{
      opacity: 1;
      transition: opacity .5s;
    }
  }

  .card{
    position: relative;
    cursor: pointer;
    padding: 25px;
    will-change: transform;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
    transition: transform .5s ease, box-shadow .5s;


    &:after{
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(136, 152, 170, .4);
      width: 100%;
      height: 100%;
      transition: background .5s;
      z-index: 1;
    }

    .nuxt-link{
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      width: 100%;
    }
    
    .title{
      font-size: 2em;
      text-transform: uppercase;
      text-align: center;
      width: inherit;
      color: darken(#7200ca, 20%);
      transition: color .5s, text-shadow .5s;
      will-change: transform;
      text-shadow: 2px 0px 0px rgba(238, 238, 238, 1),
                  -2px 0px 0px rgba(238, 238, 238, 1),
                  0px 2px 0px rgba(238, 238, 238, 1),
                  0px -2px 0px rgba(238, 238, 238, 1);
      z-index: 10;

      @media #{$small} {
        font-size: 1.4em;
      }
    }

    img{
      position: absolute;
      width: 105%;
      height: auto;
      filter: saturate(20%);
      transition: opacity .5s, filter .5s;
      will-change: transform;
      z-index: 1;
    }

    &:hover{
      -webkit-box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.75);
      box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.75);
      transition: box-shadow .5s;

      img{
        filter: saturate(100%);
        transition: filter .5s;
      }
    }
  }
</style>
