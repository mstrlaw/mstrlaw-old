<template>
  <section class="container">
    <nuxt-link
      to="/lab"
    >
      <h1 class="headline">LAB</h1>
    </nuxt-link>
    <nuxt-link
      to="/lab"
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
import axios from 'axios'
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
    if (process.server) {
      mediumZoom('img')
    }
    setTimeout( () => {
      this.visibleClass = 'visible'
    }, 50)
  },
  computed:{
    formatDate(){
      return moment(this.date).format('DD MMM YY @HH:mm')
    }
  },
  asyncData(context){
    return axios.get(`https://api.buttercms.com/v2/posts/${ context.route.params.slug }?auth_token=${ process.env.CMS_TOKEN }`)
      .then(res => {
        return {
          title: res.data.data.title,
          date: res.data.data.published,
          image: res.data.data.featured_image,
          body: res.data.data.body
        }
      })
    
    // return context.app.butter.post.retrieve(context.route.params.slug)
    //   .then(res => {
    //     return {
    //       title: res.data.data.title,
    //       date: res.data.data.published,
    //       image: res.data.data.featured_image,
    //       body: res.data.data.body
    //     }
    //   })
    //   .catch(err => {
    //     console.log('error retrieving blog post')
    //     console.log(err)
    //   })
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
