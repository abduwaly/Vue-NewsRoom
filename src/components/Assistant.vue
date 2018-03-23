<template>
  <div class='assistant'>
      <Header :headTitle='headTitle'/>
      <Footer :showFooter='showFooter' :currentPage='currentPage'/>
  </div>
</template>

<script>

import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Assistant',
  data () {
    return {
      headTitle: 'Assistant Home',
      showFooter: true,
      currentPage: 'assistant'
    }
  },
  components: { Header, Footer }
}
</script>
