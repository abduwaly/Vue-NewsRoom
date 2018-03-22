<template>
  <div class='news-detail'>
      <Header :headTitle='news.title'/>
        <div class='content-wrapper'>
            <h1>{{ news.title }}</h1>
            <p>{{ news.briefContent }}</p>
            <img :src='news.pic'/>
            <p v-html='news.content'></p>
            <hr>
            <NewsComments :newsId='news.newsId'/>
        </div>
      <Footer :showFooter='showFooter'/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import NewsComments from '@/components/NewsComments'
import Header from './Header'
import Footer from './Footer'

Vue.use(VueResource)

export default {
  name: 'NewsList',
  data () {
    return {
      news: { title: '404' },
      showFooter: true
    }
  },
  created () {
    const item = this.$route.params.newsItem
    console.log(item)
    if (item) {
      this.news = this.$route.params.newsItem
    } else {
      this.news = { title: '404' }
    }
  },
  components: { NewsComments, Header, Footer }
}
</script>

<style scoped>
img{
  max-width: 100%;
}
</style>
