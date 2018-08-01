<template>
  <div class="search-wrapper left-content primary-faded-bg">
    <input type="text" class="search font-primary primary-faded-bg" placeholder="Buscar PDVs">
    <div class="img-wrapper center-content">
      <img src="@/images/search.svg" class="icon-sm">
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.search-wrapper {
  width: 100%;
  height: 100%;
  padding: 7px 20px;
  border-radius: 20px;
}

.search {
  border: 0px solid white;
  height: 100%;
  width: 85%;
}

.img-wrapper {
  width: 15%;
}

::placeholder {
  color: #42b883;
}

</style>
