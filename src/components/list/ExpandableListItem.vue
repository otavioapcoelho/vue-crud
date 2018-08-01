<template>
  <div class="container" :class="{'expanded': expanded}">
    <div class="item-wrapper left-content" :style="{'height': getItemHeight || 0}">
      <div class="item-slot-wrapper">
        <slot name="item"></slot>
      </div>
      <div class="expand-button">
        <img src="@/images/up-arrow.svg" v-if="expanded" @click="expanded = false">
        <img src="@/images/down-arrow.svg" v-else @click="expanded = true">
      </div>
    </div>
    <div class="expandable-wrapper" :class="{'expanded': expanded}" :style="{'height': expanded ? getExpandableHeight : 0}">
      <div class="to-be-shown" :class="{'shown': expanded}">
        <slot name="expandable"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemHeight', 'expandableHeight'],
  data: () => {
    return {
      expanded: false
    }
  },
  computed: {
    getItemHeight() {
      return this.itemHeight
    },
    getExpandableHeight() {
      return this.expandableHeight
    }
  }
}
</script>

<style lang="css" scoped>

.container {
  width: 100%;
  height: 100%;
}

.item-wrapper {
  width: 100%;
}

.item-slot-wrapper {
  width: 95%;
  height: 100%;
}

.expand-button {
  width: 5%;
}

.expand-button img {
  height: 24px;
  width: 24px;
}

.expandable-wrapper {
  width: 100%;
  opacity: 0;
  transition: visibility 0s, opacity 0.4s linear;
  position: absolute;
}

/*
.expandable-wrapper {
  opacity: 0;
  transition: visibility 0s, opacity 0.4s linear;
  position: absolute;
}

.expandable-wrapper.expanded {
  visibility: visible;
  position: relative;
  opacity: 1;
} */


</style>
