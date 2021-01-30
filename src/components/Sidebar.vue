<template>
  <div class="sidebar">
    <div class="skyblue">
      <ul class="sidebar-list">
        <router-link :to ="'/chat'">
          <li>
            <span class="menu">Chat</span>
          </li>
        </router-link>
        <router-link :to ="'/chat'">
          <li>
            <span class="menu">Chat</span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      sample: 'Sample'
    }
  }
}
</script>

<style>
@import "../assets/scss/sidebar.scss";
</style>
