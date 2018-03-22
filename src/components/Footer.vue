<template>
  <div v-bind:class="{ 'footer': true, 'hide': isHide }">
    <h1></h1>
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
  background: #6c6;
  line-height: 45px;
  font-size: 24px;
  color: white;
}
</style>
