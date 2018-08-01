<template>
  <div id="users" class="white-bg center-content">
    <div class="list-container four-layer">
      <div class="filter-wrapper">

      </div>
      <div class="list-wrapper">

      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

#users {
  width: 100%;
  height: 100%;
}

.list-container {
  width: 100%;
  height: 100%;
  max-height: 850px;
  max-width: 900px;
  background-color: #fbfbfb;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  padding: 1% 2% 0;
}

.filter-wrapper {
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #42b883
}

.list-wrapper {
  width: 100%;
  height: 90%;
}

</style>
