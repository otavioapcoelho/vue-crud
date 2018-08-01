<template>
  <div class="container">
    <expandable-list-item
      :expandableHeight="'150px'"
      :itemHeight="'40px'">
      <template slot="item">
        <div class="item left-content">
          HEYO
        </div>
      </template>
      <template slot="expandable">
        <div class="expandable left-content">
          HEYO
        </div>
      </template>
    </expandable-list-item>
  </div>
</template>

<script>
import ExpandableListItem from "@/components/list/ExpandableListItem"

export default {
  components: {
    'expandable-list-item': ExpandableListItem
  }
}
</script>

<style lang="css" scoped>

.container {
  width: 100%;
  height: 100%;
}

.item {
  width: 100%;
  height: 100%;
  border: 1px solid black;
}

.expandable {
  width: 100%;
  height: 150px;
  border: 1px solid red;
}

</style>
