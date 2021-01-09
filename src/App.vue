<template>
  <div id="app">
    <top-view/>
    <div class="flex-display">
      <sidebar/>
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import TopView from '@/components/Top'

export default {
  name: 'App',
  components: {
    Sidebar,
    TopView
  }
}

</script>
<style>
@import "./assets/scss/style.scss";
</style>
