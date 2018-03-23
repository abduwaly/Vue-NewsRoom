<template>
  <div class='me'>
      <Header :headTitle='headTitle'/>
      <div class='content-wrapper'>
        <img class="avatar" src='https://avatars1.githubusercontent.com/u/26398225'>
        <ul class='flex-section'>
            <li class='section-item'>
                <span class='score'>11</span>
                <span class='description'>Favorite</span>
            </li>
            <li class='section-item'>
                <span class='score'>37</span>
                <span class='description'>Comments</span>
            </li>
            <li class='section-item'>
                <span class='score'>0</span>
                <span class='description'>My Groups</span>
            </li>
        </ul>
        <ul class='lines'>
            <li>My Uploads</li>
            <li>Activity | Registered</li>
            <li>Settings</li>
        </ul>
      </div>
      <Footer :showFooter='showFooter' :currentPage='currentPage'/>
  </div>
</template>

<script>

import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Me',
  data () {
    return {
      headTitle: 'Me',
      showFooter: true,
      currentPage: 'me'
    }
  },
  components: { Header, Footer }
}
</script>

<style scoped>
.avatar{
  height: 130px;
  border-radius: 50%;
  margin: 10px auto;
}
ul.lines{
  padding: 0;
}
ul.lines li{
  list-style-type:none;
  height: 45px;
  line-height: 27px;
  font-size: 18px;
  background: white;
  padding: 10px;
  border-bottom: 1px solid #efe4e4;
  text-align: left;
}
.flex-section{
  width: 100%;
  height: 100px;
  margin: 10px 0;
  background: white;
}
.section-item{
  display: inline-block;
  border-right: 1px solid #dedcdc;
  height: 100%;
  width: 33.333%;
  padding: 14px 0;
  float: left;
}
.score{
    display: block;
    width: 100%;
    height: 45px;
    color: #f64;
    line-height: 45px;
    font-size: 32px;
}
.description{
    display: block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    margin-top: 10px;
}
</style>
