<template>
  <div class="container">
    <div class="wrapper">
      <p>入力されたメールアドレスに認証コードを送信しました。</p>
      <p>※画面遷移せずにメールをご確認ください。</p>
      <div class="form-group confirmation-form">
        <label for="code">認証コード</label>
        <input id="code" type="text" v-model="code">
        <button class="btn btn-light border-dark confirm-btn" @click="onClickConfirmBtn">認証</button>
      </div>
      <!-- <div class="resend-form">
        <label for="name">登録した名前: </label>
        <input id="name" type="text" v-model="username">
        <a href="#" @click="onClickResendBtn">コード再送</a>
      </div> -->
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Wait',
  data () {
    return {
      code: '',
      username: ''
    }
  },
  created () {
    // console.log(this.authState)
  },
  mounted () {
    this.username = this.$route.params.username
    console.log('username in wait', this.username)
    console.log('Login')
  },
  methods: {
    async onClickConfirmBtn (e) {
      e.preventDefault()
      try {
        await Auth.confirmSignUp(this.username, this.code)
        this.$router.push('/home')
      } catch (e) {
        console.log('error', e)
      }
    }
    // async onClickResendBtn (e) {
    //   e.preventDefault()
    //   Auth.resendSignUp(this.username)
    // }
  }
}
</script>

<style>
.confirm-btn {
  height: 30px;
  padding: 3px 10px;
  margin-left: 10px;
}
.confirmation-form {
  margin-top: 50px;
  float: right;
}
.resend-form {
  float: right;
  margin-top: 40px;
}
</style>
