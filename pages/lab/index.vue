<template>
  <section class="container">
    <h1 class="headline">LAB</h1>
    <div class="cards-container push-top">
      <Card
        v-for="(post, index) in posts"
        :key="post.slug"
        :title="post.title"
        :slug="post.slug"
        :image="post.featured_image"
        :delay="500 + index*100"
      />
    </div>
  </section>
</template>

<script>
import { menuTransition } from '@/mixins/menuTransition'
import Card from '@/components/Card'

export default {
  name: 'Blog',
  mixins: [ menuTransition ],
  components:{
    Card,
  },
  transition: {
    name: 'page',
  },
  head(){
    return{
      titleTemplate: 'Blog —— mstrlaw.com'
    }
  },
  data() {
    return {
      posts: false
    }
  },
  async asyncData(context){
    console.log(context.app)
    let res  = await context.app.butter.post
      .list({
        page: 1, 
        page_size: 10
      })
      .then(res => { return res })
      .catch(err => {
        console.log(err)
        console.log('error')
      })

    console.log(res.data.data)

    return {
      posts: res.data.data
    }
  }
}
</script>
