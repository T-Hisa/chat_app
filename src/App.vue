<template>
  <div id="app">
    <top-view/>
      <router-view/>
  </div>
</template>

<script>
// import Sidebar from '@/components/Sidebar'
import TopView from '@/components/Top'

export default {
  name: 'App',
  components: {
    // Sidebar,
    TopView
  }
}

</script>
<style>
@import "./assets/scss/style.scss";
</style>
