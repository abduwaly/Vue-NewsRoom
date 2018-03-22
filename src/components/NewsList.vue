<template>
  <div class='news-list'>
    <Header :headTitle='headTitle'/>
    <div class='content-wrapper'>
        <ul v-for='item in list' v-bind:key='item.newsId'>
          <li v-on:click="toDetail(item)">
            <h3>{{ item.title }}</h3>
            <img :src='item.pic'/>
          </li>
        </ul>
    </div>
    <Footer :showFooter='showFooter'/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import Header from './Header'
import Footer from './Footer'

Vue.use(VueResource)

export default {
  name: 'NewsList',
  data () {
    return {
      headTitle: 'News Room',
      showFooter: true,
      list: []
    }
  },
  created () {
    console.log('get data')
    const _this = this
    const url = 'https://uat.redgltc.com:8443/staff/news/queryList?type=news&userId=test'
    Vue.http.get(url).then(
      function (s) {
        console.log(s, s.body.data.news)
        _this.list = s.body.data.news
      }, function (e) {
        console.log(e)
      }
    )
  },
  components: { Header, Footer },
  methods: {
    toDetail: function (item) {
      this.$router.push({ name: 'Detail', params: { newsItem: item, newsId: item.newsId } })
    }
  }
}
</script>

<style scoped>
.list-wrapper{
  width: 300px;
  margin: 10px auto;
  border: 1px solid gray;
}
ul{
  padding: 0;
}
ul li{
  list-style-type:none;
}
li{
  border:1px solid gray;
}
li:hover{
  cursor: pointer;
  background: lightgray;
}
h1{
  color:red;
}
img{
  width:100px;
}
</style>
