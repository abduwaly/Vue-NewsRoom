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
  position: fixed;
  top: 0;
  z-index:10;
  width: 100%;
  height: 52px;
  background: #f64;
  line-height: 52px;
  font-size: 18px;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 0px 10px 0 15px;
}
</style>
