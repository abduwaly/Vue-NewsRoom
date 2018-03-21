<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
        <input v-model="username"/>
        <span v-show="!unameTips">username is null</span>
    </div>
    <div>
        <input v-model="password"/>
        <span v-show="!pwdTips">password is null</span>
    </div>
    <button v-on:click='send' v-bind:disabled='isEmpty'>Logon</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to News Room!',
      username: '',
      password: ''
    }
  },
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
    send: function () {
      console.log(this.username, this.password)
      if (this.username === 'test' && this.password === 'admin') {
        console.log('ok')
        this.$router.push({ path: '/list' })
      } else {
        console.log('failed')
        this.$router.push({ path: '/fail' })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
input{
    height:20px;
}
</style>
