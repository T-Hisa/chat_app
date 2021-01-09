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
.flex-display {
  display: flex;
}

.sidebar {
  flex-basis: 20%;
}

ul {
  list-style: none;
  padding: 0;
}

.menu {
  font-size: 25px;
  font-weight: 600;
  color: black;
}

.sidebar-list li {
  text-align: center;
  padding: 10px;
  margin: 5px;
  width: 100%;
  background: radial-gradient(deepskyblue, lightblue);
}

.skyblue {
}
</style>
