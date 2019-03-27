<template>
  <section class="container">
    <nuxt-link
      to="/blog"
    >
      <h1 class="headline">BLOG</h1>
    </nuxt-link>
    <nuxt-link
      to="/blog"
      :class="visibleClass"
      class="back-link"
    >&lt;&nbsp;Back</nuxt-link>
    <article :class="visibleClass">
      <div class="title-section">
        <h2>{{ title }}</h2>
        <small>{{ formatDate }}</small>
      </div>
      <img :src="image" alt="">
      <div v-html="body" />
    </article>
  </section>
</template>

<script>
import moment from 'moment'
import mediumZoom from 'medium-zoom'

export default {
  name: 'Post',
  layout: 'innerPage',
  head(){
    return{
      titleTemplate: `${this.title} —— mstrlaw.com`
    }
  },
  data(){
    return {
      title: '',
      date: moment().toDate(),
      image: '',
      body: '<p></p>',
      visibleClass: ''
    }
  },
  mounted() {
    mediumZoom('img')
    setTimeout( () => {
      this.visibleClass = 'visible'
    }, 50)
  },
  computed:{
    formatDate(){
      return moment(this.date).format('DD MMM YY @HH:mm')
    }
  },
  async asyncData(context){

    let res = await context.app.butter.post.retrieve(context.route.params.slug)
      .catch(function(resp) {
        console.log(resp)
      })

    let data = res.data.data

    return {
      title: data.title,
      date: data.published,
      image: data.featured_image,
      body: data.body
    }
  }

}
</script>

<style lang="scss">
  @import "@/assets/utils/_mixins.scss";
  @import "@/assets/imports/_variables.scss";

  .back-link{
    display: block;
    margin-top: 10px;
    font-weight: bold;
    color: $gray-light;
    opacity: 0;
    &.visible{
      opacity: 1;
      transition: opacity .8s;
      transition-delay: 1s;
    }
  }

  article{
    margin: 4.5em 0;
    padding: 15px;
    background: linear-gradient(95deg, #f6f9fc, rgba(136, 152, 170, 0.1));
    border-radius: 4px;
    @include shadow-no-hover();
    opacity: 0;

    &.visible{
      opacity: 1;
      transition: opacity .8s;
      transition-delay: 1s;
    }

    &:first-child{
      margin-top: 0;
    }

    img{
      width: 100%;
      display: block;
      margin: 10px auto;
    }
    h3{
      margin: 20px auto 10px;
    }

    @media #{$medium} {
      &:first-child{
        margin-top: 15vh;
      }
    }

    pre{
      background: $gray-lightest;
      padding: 15px;
    }

    table{
      border: none;
      tr, td{
        border: none;
      }
      @media #{$medium} {
        display: block;
        tr, td{
          display: block;
          width: 100%!important;
        }
      }
    }
  }
</style>
