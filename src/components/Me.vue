<template>
  <div class='me'>
      <Header :headTitle='headTitle'/>
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
