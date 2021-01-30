<template>
  <div>
    <div class="error-page">
      <div class="dialog">
        <div>
          <h1>The page you were looking for doesn't exist.</h1>
          <p>You may have mistyped the address or the page may have moved.</p>
        </div>
        <p>If you are the application owner check the logs for more information.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Err',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log('Home')
  }
}
</script>

<style>
@import "../assets/scss/error.scss";
</style>
