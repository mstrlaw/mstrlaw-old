<template>
  <div class="inner-container">
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
      posts: []
    }
  },
  async asyncData(context){

    let res  = await context.app.butter.post
      .list({
        page: 1, 
        page_size: 10
      })

    return {
      posts: res.data.data
    }
  }
}
</script>
