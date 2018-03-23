<template>
  <div class='news-list'>
    <Header :headTitle='headTitle'/>
    <div class='content-wrapper'>
        <ul v-for='item in list' v-bind:key='item.newsId'>
          <li v-on:click="toDetail(item)">
            <div class='left item-pic'>
              <img :src="item.pic">
            </div>
            <div class="right item-info">
              <h3>{{ item.title }}</h3>
              <div class='brief-content'>{{ item.briefContent }}</div>
            </div>
          </li>
        </ul>
    </div>
    <Footer :showFooter='showFooter' :currentPage='currentPage'/>
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
      currentPage: 'list',
      list: []
    }
  },
  created () {
    console.log('get data')
    const _this = this
    const url = 'https://uat.redgltc.com:8443/staff/news/queryList?type=news&userId=test&pager.pageNo=2&pager.pageSize=10'
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
ul{
  padding: 0;
}
ul li{
  list-style-type:none;
  height: 120px;
  background: white;
  padding: 10px;
  margin: 7px;
  box-shadow: 0px 0px 6px #ccc;
}
li:hover{
  cursor: pointer;
}
.item-pic{
  width:40%;
  height:100px;
}
.item-pic img{
  width: 100%;
  height: 100%;
}
.item-info{
  width: 56%;
  height: 100px;
  overflow: hidden;
}
.item-info h3{
  height:22px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.brief-content{
    height:78px;
    line-height: 22px;
    text-align: left;
    text-indent: 1.5em;
    font-size: 0.8em;
    color: gray;
    margin-top: 10px;
}
</style>
