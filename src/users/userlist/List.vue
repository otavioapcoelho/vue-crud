<template>
  <div class="list-wrapper">
    <div class="headers left-content">
      <div class="half-column"></div>
      <div class="double-column">NOME</div>
      <div class="double-half-column">CÓDIGO</div>
      <div class="double-half-column">FUNÇÃO</div>
      <div class="double-column">ÁREA</div>
      <div class="half-column"></div>
    </div>
    <div class="item" v-for="item in 5">
      <list-item/>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem"

export default {
  name: 'UserList',
  props: ['items'],
  components: {
    'list-item': ListItem
  }
}
</script>

<style lang="css" scoped>

.list-wrapper {
  width: 100%;
  height: 100%;
}

.headers {
  height:
}

.item {
  width: 100%;
  display: block;
}

</style>
