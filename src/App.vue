<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/styles/positioning.css'
import '@/styles/background.css'
import '@/styles/scrollbar.css'
import '@/styles/animation.css'
import '@/styles/column.css'
import '@/styles/layers.css'
import '@/styles/font.css'
import '@/styles/icon.css'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

</style>
