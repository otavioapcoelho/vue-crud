<template>
  <div class="navbar five-layer white-bg">
    <div class="menu primary-faded-bg left-hover left six-layer center-content">
      <img src="@/images/menu.svg" class="icon-md">
    </div>
    <div class="menu primary-faded-bg left-hover left six-layer center-content">
      <img src="@/images/telephone.svg" class="icon-md">
    </div>
    <div class="search-wrapper right six-layer">
      <div class="search">
        <search/>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/utils/Search"

import DropdowMenu from '@/components/utils/DropdownMenu'
import router from '@/router/index'

export default {
  name: 'Navbar',
  methods: {
    goHome() {
      router.push({ name: 'Home' })
    }
  },
  components: {
    'dropdown-menu': DropdowMenu,
    'search': Search
  }
}
</script>

<style lang="css" scoped>

.navbar {
  height: 80px;
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
  height: 80px;
  width: 60px;
  margin: 0;
}

.menu:hover {
 cursor: pointer;
 background-color: #c9e2d8;
}

.icon {
  height: 25px;
  width: 25px;
}

.logo {
  height: 40px;
}

.logo-wrapper {
  margin-left: 10px;
  height: 100%;
  width: 250px;
}

.search-wrapper {
  height: 100%;
  width: 210px;
  padding-top: 2.5%;
  padding-right: 1%;
}

.search {
  height: 35px;
}

.logo-wrapper:hover {
  cursor: pointer;
}

.title {
  margin-left: 10px;
}
</style>
