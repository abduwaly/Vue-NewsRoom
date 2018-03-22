<template>
  <div class="login">
    <Header :headTitle='headTitle'/>
    <div class='content-wrapper'>
        <div class='form-section'>
          <input v-model="username"/>
          <span v-show="!unameTips">username is null</span>
        </div>
        <div  class='form-section'>
          <input v-model="password"/>
          <span v-show="!pwdTips">password is null</span>
        </div>
        <div class='form-section'>
          <button v-on:click='logon' v-bind:disabled='isEmpty' class='left'>Logon</button>
          <button v-on:click='register' class='right'>Register</button>
        </div>
    </div>
    <Footer :showFooter='showFooter'/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'News Room',
      headTitle: 'Login',
      showFooter: false,
      username: '',
      password: ''
    }
  },
  components: { Header, Footer },
  computed: {
    unameTips: function () {
      return !!(this.username)
    },
    pwdTips: function () {
      return !!(this.password)
    },
    isEmpty: function () {
      return (!this.unameTips || !this.pwdTips)
    }
  },
  methods: {
    logon: function () {
      console.log(this.username, this.password)
      if (this.username === 'test' && this.password === 'admin') {
        console.log('ok')
        this.$router.push({ path: '/list' })
      } else {
        console.log('failed')
        this.$router.push({ path: '/fail' })
      }
    },
    register: function () {
      console.log('To Register Page ...')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.form-section{
  height: 50px;
  margin-top: 10px;
  padding: 0 5%;
  width: 100%;
}
input{
  height: 40px;
  width: 60%;
  float: left;
}
.form-section span{
  color: red;
  height: 40px;
  line-height: 40px;
}
button{
  height: 40px;
  width: 45%;
  background: #6c6;
}
</style>
