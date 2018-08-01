<template>
  <div id="home" class="center-content">
    <custom-navbar/>
    <img class="one-layer" src="@/images/crud-bg.png" style="position: absolute; top: 50px; left: 0; width: 100%;">
    <div class="content-wrapper two-layer">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/navbar/Navbar'

export default {
  name: 'Home',
  components: {
    'custom-navbar': Navbar
  }
}
</script>

<style lang="css" scoped>

#home {
  width: 100%;
  height: 100%;
}

.content-wrapper {
  width: 100%;
  height: 100%;
  padding-top: 50px;
  position: absolute;
}

</style>
