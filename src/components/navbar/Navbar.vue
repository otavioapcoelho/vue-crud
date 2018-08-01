<template>
  <div class="navbar five-layer white-bg">
    <div class="left left-content logo-wrapper six-layer" @click="goHome()">
      <img src="@/images/vue-logo.png" class="logo">
      <div class="font-bg title">VUE-CRUD</div>
    </div>
    <div class="menu right-hover right six-layer">
      <dropdown-menu :direction="'to-left'" :items="dropdownItens"/>
    </div>
  </div>
</template>

<script>

import DropdowMenu from '@/components/utils/DropdownMenu'
import router from '@/router/index'

export default {
  name: 'Navbar',
  data: () => {
    return {
      dropdownItens: [{
        name: 'Users',
        action: () => router.push({ name: 'Users'})
      },{
        name: 'Users',
      },{
        name: 'Users',
      },{
        name: 'Users',
        action: () => console.log('Users')
      },{
        name: 'Users',
        action: () => console.log('Users')
      },{
        name: 'Users',
        action: () => console.log('Users')
      },{
        name: 'Users',
        action: () => console.log('Users')
      }]
    }
  },
  methods: {
    goHome() {
      router.push({ name: 'Home' })
    }
  },
  components: {
    'dropdown-menu': DropdowMenu
  }
}
</script>

<style lang="css" scoped>

.navbar {
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);

}

.middle-area {
  height: 100%;
  width: 100%;
}

.menu {
  height: 50px;
  width: 60px;
  margin: 0;
  border: 1px solid white
}

.menu:hover {
 cursor: pointer;
 background-color: #fafafa;
 border: solid 1px #c5d0e1;
}

.logo {
  height: 40px;
}

.logo-wrapper {
  margin-left: 10px;
  height: 100%;
  width: 250px;
}

.logo-wrapper:hover {
  cursor: pointer;
}

.title {
  margin-left: 10px;
}
</style>
