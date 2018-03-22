<template>
  <div class='settings'>
      <Header :headTitle='headTitle'/>
      <Footer :showFooter='showFooter' :currentPage='currentPage'/>
  </div>
</template>

<script>

import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Settings',
  data () {
    return {
      headTitle: 'Settings',
      showFooter: true,
      currentPage: 'settings'
    }
  },
  components: { Header, Footer }
}
</script>
