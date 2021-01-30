<template>
  <div class="container">
    <form class="wrapper form-container bg-skyblue" method="POST">
      <span class="title inner-wrapper">Sign Up</span>
      <div class="form-group form-wrapper">
        <label class="form-label" for="name">名前</label>
        <input class="form-control" id="name" type="text" v-model="name">
      </div>
      <div class="form-group form-wrapper">
        <label class="form-label" for="email">Eメール</label>
        <input class="form-control" id="email" type="text" v-model="email">
      </div>
      <div class="form-group form-wrapper">
        <label class="form-label" for="password">パスワード</label>
        <input class="form-control" id="password" type="password" v-model="password" value="登録">
      </div>
      <button class="btn btn-light border-dark border register-btn" v-on:click="onClickSignUp">登録</button>
    </form>
  </div>
</template>

<script>

import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Auth } from 'aws-amplify'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      name: '',
      password: '',
      msg: 'Welcome to Your Vue.js App',
      user: Object,
      authState: Object
    }
  },
  created () {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState
      this.user = authData
    })
  },
  mounted () {
  },
  methods: {
    onClickSendBtn (e) {
      e.preventDefault()
    },
    async onClickSignUp (e) {
      e.preventDefault()
      try {
        const userData = await Auth.signUp({
          username: this.name,
          password: this.password,
          attributes: {
            email: this.email
          }
        })
        this.user = userData.user
        this.$router.push({ name: 'Wait', params: { username: this.name } })
      } catch (e) {
        console.log('error', e)
      }
    }
  }
}
</script>
<style>
</style>
