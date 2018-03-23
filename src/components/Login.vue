<template>
  <div class="login">
    <Header :headTitle='headTitle'/>
    <div class='content-wrapper'>
        <div class='form-section'>
          <input v-model="username" placeholder='UserName or StaffId'/>
        </div>
        <div  class='form-section'>
          <input v-model="password" type="password" placeholder='Password'/>
        </div>
        <div class='form-section'>
          <button v-on:click='logon' v-bind:disabled='isEmpty' v-bind:class="[{'disabled': isEmpty},'left']">Logon</button>
          <button v-on:click='register' class='right'>Register</button>
        </div>
    </div>
    <Footer :showFooter='showFooter'/>
  </div>
</template>

<script>

import MD5 from 'js-md5'
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
      password: '',
      linkImg: {
        errorIcon: require('../assets/error.png')
      }
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
      if (this.username === 'test' && MD5.hex(this.password) === '21232f297a57a5a743894a0e4a801fc3') {
        console.log('ok')
        this.$router.push({ path: '/list' })
      } else {
        console.log('failed')
        this.$router.push({ path: '/fail' })
      }
    },
    register: function () {
      console.log('To Register Page ...', MD5.hex('admin'), this.linkImg.errorIcon)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  margin-top: 50%;
}
.form-section{
  height: 50px;
  margin-top: 10px;
  padding: 0 5%;
  width: 100%;
}
input{
  height: 40px;
  width: 100%;
  float: left;
  color: #000;
}
button{
  height: 40px;
  width: 45%;
  background: #f64;
}
button.disabled{
  background-color: #f1c3b9;
  color: #768a76;
}
</style>
