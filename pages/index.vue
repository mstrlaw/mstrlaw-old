<template>
  <div class="inner-container">
    <div v-if="!posts">Unable to load blog :(</div>
    <PostPreview
      v-for="(post, index) in posts" 
      :key="index"
      :title="post.title"
      :slug="post.slug"
      :date="post.published"
      :image="post.featured_image"
      :summary="post.summary"
    />
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview'

export default {
  name: 'Home',
  components:{
    PostPreview
  },
  data(){
    return {
      posts: false
    }
  },
  async asyncData(context){

    await context.app.butter.post
      .list({
        page: 1, 
        page_size: 10
      })
      .then(res => {
        return {
          posts: res.data.data
        }
      })
      .catch(err => {
        console.log('error')
      })

    // return {
    //   posts: res.data.data
    // }
  }
}
</script>
