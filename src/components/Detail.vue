<template>
  <div class='news'>
    <h1>{{ news.title }}</h1>
    <p>{{ news.briefContent }}</p>
    <img :src='news.pic'/>
    <p v-html='news.content'></p>
    <hr>
    <NewsComments :newsId='news.newsId'/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import NewsComments from '@/components/NewsComments'

Vue.use(VueResource)

export default {
  name: 'NewsList',
  data () {
    return {
      msg: 'this is news detail',
      news: {}
    }
  },
  created () {
    const item = this.$route.params.newsItem
    console.log(item)
    if (item) {
      this.news = this.$route.params.newsItem
    } else {
      this.news = { title: 'Oops! 404' }
    }
  },
  components: { NewsComments }
}
</script>

<style scoped>
.news{
  width: 300px;
  margin: 10px auto;
  border: solid 1px gray;
}
img{
  max-width: 100%;
}
</style>
