<template>
  <div class='header bg-info'>
    <b-navbar class="custom-nav-bar" toggleable="lg" type="dark" variant="info">
      <span class="title">ChatApp</span>
      <div class="flex-display">
        <div v-if="isUserSignin" class="notify-wrapper">
          <i class="fas fa-bell custom-font"></i>
          <span>0
            <i class="fas fa-angle-down"></i>
          </span>
        </div>
        <div v-if="isUserSignin">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Logout</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
        <a v-if="isUserSignin" class="f-black" @click="onClickSignOutBtn">Sign Out</a>
        <div v-else>
          <router-link v-if="isPathSignin" class="f-black" to="/signup">Signup</router-link>
          <router-link v-else class="f-black" to="/signin">SignIn</router-link>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TopView',
  // data () {
  //   return {
  //     isPathSignin: false
  //   }
  // },
  props: {
    isUserSignin: {
      type: Boolean,
      default: false
    },
    isPathSignin: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log('created in Top')
  },
  mounted () {
    console.log('mounted in Top')
  },
  updated () {
    console.log('updated in Top')
  },
  // computed: {
  //   isPathSignin () {
  //     return !!this.$route.path.includes('signin')
  //   }
  // },
  methods: {
    onClickSignOutBtn () {
      console.log('sign out pushed!')
      this.$emit('user-login')
    }
  }
}
</script>

<style scoped>
.header {
  color: white;
  text-align: right;
}

.custom-nav-bar {
  justify-content: space-between;
}

.flex-display {
  display: flex;
}

.notify-wrapper {
  margin-right: 10px;
}

.flex-display span {
  font-size: 15px;
  font-weight: bold;
  margin: auto 0;
}

.header .custom-font {
  line-height: 40px;
  font-size: 20px;
}

.title {
  color: white;
  font-weight: bold;
  font-size: 30px;
  margin-left: 30px;
}
</style>
