<template>
  <div v-bind:class="{ 'footer': true, 'hide': isHide }">
    <section class='foot-item'>
      <span>NewsRoom</span>
    </section>
    <section class='foot-item'>
      <span>NewsRoom</span>
    </section>
    <section class='foot-item'>
      <span>NewsRoom</span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['showFooter'],
  data () {
    return {
      isHide: !this.showFooter
    }
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
  display: flex;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
}
.foot-item{
  display: flex;
  flex: 1;
  text-align: center;
  align-item: center;
}
.foot-item span{
  width: 100%;
  bottom: 0;
}
</style>
