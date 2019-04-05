<template>
  <div>
    <section class="container home">
      <h1 class="headline">MSTRLAW</h1>
      <div class="content-wrapper">
        <h1
          :class="{ 'visible': visible }"
          class="description"
        >Hey there! I'm Lawrence — fullstack Javascript developer and tech consultant.</h1>
        <h3
          :class="{ 'visible': visible }"
          class="description description-2"
        >I <no-ssr>
            <a
              href="#"
              class="link green"
              v-tooltip="{
                autoHide: false,
                content: `<div class='work-tooltip'><span class='quote'>Lawrence is a leader and passionate about all things UX. He has a keen eye for detail, allowing him to deliver high quality products. In the time he spent working with us at SeaBookings, he has helped to design and develop the revamped SeaBookings Portal. A truly team player that was always ready to help.</span><div class='source'><a href='https://www.linkedin.com/in/fabioneves85/' target='blank' class='client'>Fábio Neves</a><span class='company'>CTO, SeaBookings</span></div><div>`, 
                classes: 'border p-0 w-full max-w-xs',
                placement: 'auto',
                html: true,
                delay: { show: 100, hide: 500 },
              }"
            >build User Interfaces</a>,
          </no-ssr> provide 
          <no-ssr>
            <a
              href="#"
              class="link blue"
              v-tooltip="{
                autoHide: false,
                content: `<div class='work-tooltip'><span class='quote'>I have come to known Lawrence as a highly responsible professional as an engineer with broad understanding of product / project management. He's flexible to work with various timezones and ready to do the extra that is needed to meet deadlines. Besides regular project work, Lawrence has tried to incubate various digital products himself, making it easy to work with him in the context of developing new products. But above it all, Lawrence is very pleasant to work with, for any product owner,  or any development team.</span><div class='source'><a href='https://www.linkedin.com/in/honghavo/' target='blank' class='client'>Ha Vo</a><span class='company'>Team & Project Manager</span></div><div>`, 
                placement: 'auto',
                html: true,
                delay: { show: 100, hide: 500 },
              }"
            >tech consultancy </a>
          </no-ssr>
            and deliver 
          <no-ssr>
            <a
              href="#"
              class="link red"
              v-tooltip="{
                autoHide: false,
                content: `<div class='work-tooltip'><span class='quote'>Lawrence is highly skilled and was extremely valuable in delivering a quality product in a very short period of time. He was great to work with and went above and beyond to ensure our Project launched on time. Since launch we have received positive feedback from our clients who appreciate the ease of use.</span><div class='source'><a href='https://www.linkedin.com/in/michellezar/' target='blank' class='client'>Michelle Zar</a><span class='company'>Technical Project Manager, Politico</span></div><div>`, 
                placement: 'auto',
                html: true,
                delay: { show: 100, hide: 500 },
              }"
            >high quality SPAs</a>
          </no-ssr> that integrate with your stack.</h3>

          <ContactSlider />
        
      </div>
      <img
        :class="{ 'visible': visible }"
        src="/images/law_desktop.png"
        alt="Law pic desktop"
        class="image image-1"
      >
    </section>
    <div class="img-wrapper">
      <img
        :class="{ 'visible': visible }"
        src="/images/law_mobile.png"
        alt="Law pic mobile"
        class="image image-2"
      >
    </div>
  </div>
</template>

<script>
  
  import ContactSlider from '@/components/ContactSlider'

  import { menuTransition } from '@/mixins/menuTransition'

  export default {
    name: 'Home',
    mixins: [ menuTransition ],
    transition: 'page',
    components: {
      ContactSlider
    },
    data() {
      return {
        visible: false
      }
    },
    mounted() {
      setTimeout( () => {
        this.visible = true
      }, 500)
    }
  }
</script>

<style lang="scss">
  @import "@/assets/imports/_variables.scss";

  .content-wrapper{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    @media #{$large} {
      width: 50%;
    }
    @media #{$medium} {
      width: 100%;
    }
  }

  .home{
    height: 100%;
  }

  .description, .description-2, .image-1{
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 1s, transform .5s;
    &.visible{
      opacity: 1;
      transform: translateX(0px);
      transition: opacity 1s, transform .5s;
      transition-delay: .5s;
    }
    @media #{$medium} {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s, transform .5s;
      &.visible{
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 1s, transform .5s;
        transition-delay: .5s;
      }
    }
  }


  .link{
    color: lighten($black, 20%);
    text-decoration: none;
    border-bottom: 3px dotted lighten($blue, 20%);
    
    &.green{
      border-color: #00B4BB;
    }
    
    &.blue{
      border-color: #0099ee;
    }

    &.red{
      border-color: #b70000;
    }
  }

  .description, .description-2{
    text-shadow: 1px 0px 0px rgb(246, 249, 252),
                -1px 0px 0px rgb(246, 249, 252),
                0px 1px 0px rgb(246, 249, 252),
                0px -1px 0px rgb(246, 249, 252);
  }

  .description{
    font-size: 2em;
  
    &:not(.description-2){
      margin-top: 3em;
      line-height: 1.3em;

      @media #{$medium} {
        margin-top: 1.5em;
      }

      @media #{$small} {
        font-size: 1.8em;
        margin-top: 1em;
      }

    }

    &.description-2{
      font-size: 1.5em;
      
      @media #{$small} {
        font-size: 1.2em;
      }

      &.visible{
        transition-delay: .8s;
      }
    }
  }

  .image-1{
    position: fixed;
    bottom: 0;
    top: 10vh;
    right: 10vw;
    height: auto;
    width: 100%;
    min-width: 400px;
    max-width: 30%;
    z-index: -1;
  }

  .img-wrapper{
    position: absolute;
    left: 0;
    z-index: -1;
  }

  .image-2{
    position: relative;
    display: none;
    height: auto;
    width: 100%;
    z-index: 1;
  }

  .work-tooltip{
    display: block;
    padding: 15px;
    max-width: 500px;

    .quote{
      padding-left: 15px;
      font-style: italic; 
      &:before, &:after{
        font-size: 2em;
        line-height: 0em;
      }
      &:before{
        padding-right: 5px;
        content: '“';
      }
      &:after{
        padding-left: 5px;
        content: '„';
      }
    }

    .source{
      padding-top: 15px;
      text-align: right;
      .client, .company{
        display: block;
      }
      .client{
        color: $black;
        text-decoration: underline;
      }
      .company{
        font-size: 70%;
        color: $gray-dark;
      }
    }
  }

  @media #{$medium} {
    .image-1{
      display: none;
    }
    .image-2{
      display: block;
    }
  }
</style>
