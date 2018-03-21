<template>
  <div>
    {{ commentList }}
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  name: 'NewsComments',
  data () {
    return {
      commentList: {}
    }
  },
  props: ['newsId'],
  created () {
    console.log('get data')
    const _this = this
    const url = 'https://uat.redgltc.com:8443/staff/comment/getCommentsList?type=news&userId=test&contentId=' + this.newsId
    Vue.http.get(url).then(
      function (s) {
        console.log(s)
        _this.commentList = s.body.data.CommentList
      }, function (e) {
        console.log(e)
      }
    )
  }
}
</script>
