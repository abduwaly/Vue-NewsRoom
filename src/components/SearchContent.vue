<template>
  <div class='search-content'>
    <input type='text' v-model='searchedItem' @keyup='transfer' placeholder='Search'>
    <span v-bind:style="{backgroundImage: 'url(' + this.iconImg + ')'}"></span>
  </div>
</template>

<script>

export default {
  name: 'SearchContent',
  data () {
    return {
      searchedItem: '',
      iconImg: '../static/iconImg/search.png'
    }
  },
  methods: {
    transfer: function () {
      this.$emit('getContent', this.searchedItem)
    }
  }
}
</script>

<style scoped>
.search-content{
    width: 100%;
    height: 50px;
    padding: 5px;
    text-align: left;
}
input{
    height: 100%;
    width: 88%;
}
span{
    height: 28px;
    width: 28px;
    float: left;
    margin: 5px;
    background-size: 28px;
}
</style>
