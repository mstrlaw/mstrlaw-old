<template>
  <div
    :class="{ 'unlocked': unlocked, 'visible': visible }"
    class="contact-slide-wrapper"
  >
    <h3 class="title">Let's talk?<span class="label">Swipe right to reveal email</span></h3>

    <div class="input-wrapper">
      <input
        type="range"
        min="0"
        max="100"
        value="0"
        v-model="sliderValue"
        @change="handleSwipe"
      >
    </div>
    <a
      :href="mailto"
      class="address"
    >{{ finalEmail }}</a>
  </div>
  <!--div class="slider-wrapper">
    <div
      v-hammer:swipe="handleSwipe"
      class="contact-slider"
    >
      <div class="initiator"/>
      <div
        v-hammer:swipe.left="handleSwipe"
        class="toggle"
      />
      <div class="receiver"/>
    </div>
  </div-->
</template>

<script>
  export default {
    name: 'ContactSlider',
    data() {
      return {
        visible: false,
        sliderValue: 0,
        unlocked: false,
        fragmentedEmail: ['l','a','w','b','r','a','u','n','.','a','l','m','e','i','d','a','@','g','m','a','i','l','.','c','o','m'],
        finalEmail: '',
        mailto: ''
      }
    },
    mounted() {
      setTimeout( () => {
        this.visible = true
      }, 100)
    },
    // watch: {
    //   sliderValue() {
        
    //   }
    // },
    methods: {
      handleSwipe() {
        if (this.sliderValue >= 99) {
          this.unlocked = true
          this.finalEmail = this.fragmentedEmail.join('')
          this.mailto = `mailto:${ this.finalEmail }`
        } else {
          let threshold = this.sliderValue

          for (let i=this.sliderValue; i>=0; i--) {
            setTimeout( () => {
              this.sliderValue = i
            }, 200 + (threshold - (i * 2)) )
          }

        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "@/assets/utils/_mixins.scss";

  .contact-slide-wrapper{
    position: relative;
    max-width: 350px;
    width: 100%;
    margin-top: 15px;
    opacity: 0;

    &.visible{
      opacity: 1;
      transition: opacity 1s;
      transition-delay: 2s;
    }

    .input-wrapper{
      position: relative;
      opacity: 1;
      height: 35px;
      border-radius: 45px;
    }

    &.unlocked{
      .input-wrapper, .label{
        opacity: 0;
        transition: .5s;
        z-index: -1;
      }
      .address{
        opacity: 1;
        transition: .5s;
        z-index: 10;
      }
    }

    .label{
      opacity: 1;
      margin-left: 10px;
      font-size: 70%;
      font-weight: normal;
    }

    .address{
      position: absolute;
      opacity: 0;
      top: 50px;
      left: 0px;
      z-index: -1;
      font-weight: bold;
    }
  }

  input[type=range] {
    -webkit-appearance: none;
    margin: 0;
    width: 100%;
    background: transparent;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 35px;
    cursor: pointer;
    animate: 0.2s;
    // background: lighten(#283439, 70%);
    background: transparent;
    border-radius: 45px;
    box-shadow: inset 0 0px 0px 4px rgba(0, 0, 0, 0.1);
  }
  input[type=range]::-webkit-slider-thumb {
    border: 5px solid #c7ced0;
    height: 35px;
    width: 35px;
    background: #dee5e8;
    cursor: pointer;
    -webkit-appearance: none;
    border-radius: 45px;
    @include shadow;
  }
  /*input[type=range]:focus::-webkit-slider-runnable-track {
    background: orange;
  }*/
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 35px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-radius: 45px;
    @include shadow-no-hover();
  }
  input[type=range]::-moz-range-thumb {
    border: 1px solid #283439;
    height: 35px;
    width: 35px;
    background: #283439;
    cursor: pointer;
    -webkit-appearance: none;
    border-radius: 45px;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 35px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-radius: 45px;
    @include shadow-no-hover();
  }
  input[type=range]::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type=range]::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type=range]::-ms-thumb {
    border: 2px solid #000000;
    height: 35px;
    width: 35px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    border-radius: 45px;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #3071a9;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #367ebd;
  }
</style>
