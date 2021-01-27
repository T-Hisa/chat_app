<template>
  <div class="flex-display">
    <sidebar/>
    <div class="container">
      <div class="wrapper">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'Container',
  components: {
    Sidebar
  },
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
