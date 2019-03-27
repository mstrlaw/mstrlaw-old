<template>
  <section class="container">
    <h1 class="headline">WORK</h1>
    <div class="cards-container">
      <Card
        :title="'Seabookings'"
        :class-name="'seabookings'"
        :delay="800"
      />
      <Card
        :title="'Politico'"
        :class-name="'politico'"
        :delay="900"
      />
      <Card
        :title="'Thoro News'"
        :class-name="'thoronews'"
        :delay="1000"
      />
      <Card
        :title="'Dataglass'"
        :delay="1100"
      />
    </div>
  </section>
</template>

<script>
import { menuTransition } from '@/mixins/menuTransition'
import Card from '@/components/Card'

export default {
  name: 'Work',
  mixins: [ menuTransition ],
  components:{
    Card,
  },
  transition: {
    name: 'page',
    // duration: 5000
  },
  head(){
    return{
      titleTemplate: 'Work —— mstrlaw.com'
    }
  },
}
</script>
