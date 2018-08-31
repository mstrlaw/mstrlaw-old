<template>
  <article>
    <h2>
      <router-link :to="{ name:'post-slug', params:{ slug:slug } }">{{ title }}</router-link>
      <a href="#"></a>
    </h2>
    <small>
      <time :datetime="date">{{ readableDate }}</time>
    </small>
    <img :src="image" alt="">
    <p>{{ summary }}</p>
  </article>  
</template>

<script>
import moment from 'moment'

export default {
  name: 'PostPreview',
  props:{
    title:{
      type: String,
      default: 'N/A'
    },
    slug:{
      type: String,
      default: ''
    },
    date:{
      type: String,
      default: moment().toISOString()
    },
    image: {
      type: String,
      default: ''
    },
    summary:{
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore hic obcaecati ratione, debitis dolor eaque ab facere nobis itaque quae exercitationem voluptatibus odio, rerum eligendi a sit architecto iste eos.'
    },
  },
  computed:{
    readableDate(){
      return moment(this.date).format('DD MMM YY @HH:mm')
    }
  }
}
</script>
