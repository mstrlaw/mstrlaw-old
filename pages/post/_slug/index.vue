<template>
  <div class="inner-container">
    <article>
      <h1>{{ title }}</h1>
      <small>{{ formatDate }}</small>
      <img :src="image" alt="">
      <div v-html="body" />
    </article>
  </div>
</template>

<script>
import moment from 'moment'

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
      title: 'Example title',
      date: moment().toDate(),
      image: '',
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, architecto omnis. Consequuntur dolorum, vitae, ad distinctio sed quae, provident incidunt omnis qui voluptatum tempore, modi necessitatibus eius enim dignissimos beatae?</p>'
    }
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
