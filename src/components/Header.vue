<template>
  <div class='header'>{{ title }}</div>
</template>

<script>
export default {
  name: 'Header',
  props: ['headTitle'],
  data () {
    return {
      title: this.headTitle
    }
  }
}
</script>

<style scoped>
.header{
  z-index:10;
  width: 100%;
  height: 45px;
  background: #6c6;
  line-height: 45px;
  font-size: 24px;
  color: white;
}
</style>
