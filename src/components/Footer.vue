<template>
  <div v-bind:class="{ 'footer': true, 'hide': isHide }">
    <section class='foot-container'>
      <section class='foot-item'>
        <router-link to="/list">
          <span v-bind:class="{ 'curr': isCurr[0] }">NewsRoom</span>
        </router-link>
      </section>
      <section class='foot-item'>
        <router-link to="/settings">
          <span v-bind:class="{ 'curr': isCurr[1] }">Settings</span>
        </router-link>
      </section>
      <section class='foot-item'>
        <router-link to="/me">
          <span v-bind:class="{ 'curr': isCurr[2] }">Me</span>
        </router-link>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['showFooter', 'currentPage'],
  data () {
    return {
      isHide: !this.showFooter,
      isCurr: [false, false, false]
    }
  },
  created () {
    const pages = ['list', 'settings', 'me']
    const _this = this
    pages.forEach(function (item, index) {
      if (item === _this.currentPage) {
        _this.isCurr[index] = true
      }
    })
  }
}
</script>

<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 45px;
  background-color: #fff;
  line-height: 45px;
  font-size: 12px;
  color: white;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
}
.foot-container{
  display: flex;
}
.foot-item{
  display: flex;
  flex: 1;
  text-align: center;
  align-item: center;
}
.foot-item span{
  width: 100%;
  font-weight: bold;
  color: darkgrey;
}
.foot-item span.curr{
  color: #6c6;
}
a{
  width: 100%;
}
</style>
