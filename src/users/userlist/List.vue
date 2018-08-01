<template>
  <div class="list-wrapper">
    <div class="headers">
      <div class="half-column"></div>
      <div class="double-column">NOME</div>
      <div class="double-half-column">CÓDIGO</div>
      <div class="double-half-column">FUNÇÃO</div>
      <div class="double-column">ÁREA</div>
      <div class="half-column"></div>
    </div>
    <div class="item" v-for="item in items">

    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: ['items']
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
  height: 70px;
}

</style>
