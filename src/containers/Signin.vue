<template>
  <div class="container">
    <form class="wrapper form-container bg-skyblue" method="POST">
      <span class="title inner-wrapper">Sign In</span>
      <div class="form-group form-wrapper">
        <label class="form-label" for="name">名前</label>
        <input class="form-control" id="name" type="text" v-model="name">
      </div>
      <div class="form-group form-wrapper">
        <label class="form-label" for="password">パスワード</label>
        <input class="form-control" id="password" type="password" v-model="password">
      </div>
      <button class="btn btn-light border-dark border register-btn" v-on:click="onClickSignIn">ログイン</button>
    </form>
    <div class="form-group form-wrapper">
      <label class="form-label" for="email">Eメール</label>
      <input class="form-control" id="email" type="text" v-model="email">
    </div>
    <a @click="sample">aaa</a>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Signin',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      msg: 'Welcome to Your Vue.js App',
      user: Object,
      authState: Object
    }
  },
  created () {
    console.log(this.authState)
    console.log(this.user)
  },
  mounted () {
    console.log('Login')
    console.log(this)
  },
  methods: {
    async onClickSignIn (e) {
      e.preventDefault()
      try {
        console.log(this.name)
        console.log(this.email)
        console.log(this.password)
        let username = this.name
        let password = this.password
        const user = await Auth.signIn(username, password)
        this.user = user
        this.$router.push('/chat')
        this.$emit('user-login')
        console.log(user)
      } catch (e) {
        console.log('error', e)
      }
    },
    sample () {
      console.log('sample clicked!')
    }
  }
}
</script>
<style>
</style>
