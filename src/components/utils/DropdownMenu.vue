<template>
  <div class="wrapper" v-if="isShowDropdown">
    <div :id="`dropdown-menu-icon-${_uid}`" class="icon center-content" @click="isOpen = true">
      <img :id="`dropdown-menu-icon-image-${_uid}`" src="@/images/menu.svg">
    </div>
    <div :id="`dropdown-menu-${_uid}`"
    class="menu white-bg to-be-shown"
    v-click-outside="close"
    :class="{
      'to-right': direction == 'to-right',
      'to-left': direction == 'to-left',
      'show': isOpen
      }">
      <div class="item font-md left-content" v-for="item in items" @click="callAction(item)">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'DropdownMenu',
  props: ['direction', 'items'],
  directives: {
    clickOutside: vClickOutside.directive
  },
  data: () => {
    return {
      isOpen: false
    }
  },
  methods: {
    close(e) {
      if(e.target.id != `dropdown-menu-icon-${this._uid}`
        && e.target.id != `dropdown-menu-${this._uid}`
        && e.target.id != `dropdown-menu-icon-image-${this._uid}`) {
        this.isOpen = false
      }
    },
    callAction(item) {
      if(item.action) {
        this.isOpen = false
        item.action()
      } else {
        console.error(`AÇÃO DE ITEM ${item.name} NÃO EXISTE; VERIFIQUE NOME DA PROPRIEDADE`);
      }
    }
  },
  computed: {
    isShowDropdown() {
      if(this.items) {
        return this.items.length > 0
      }
      return false
    },
    getId() {
      return this.dropdownId || ''
    }
  }

}
</script>

<style lang="css" scoped>

.wrapper {
  width: 100%;
  height: 100%;
}

.icon {
  width: 100%;
  height: 100%;
}

.icon:hover {
  box-sizing: border-box;
  cursor: pointer;
}

.icon img {
  width: 30px;
  height: 30px;
}

.menu {
  position: relative;
  top: -5px;
  width: 250px;
  max-height: 250px;
  overflow: hidden;
  overflow-y: auto;
  visibility: hidden;
  box-shadow: 0 0 5px rgba(0,0,0,0.25);
  opacity: 0;
  transition: visibility 0s, opacity 0.4s linear;
  position: absolute;
}

.menu .show {
  visibility: visible;
  position: relative;
  opacity: 1;
}

.item {
  height: 45px;
  width: 100%;
  padding: 5px;
  border-top: white 1px solid;
  border-bottom: #E2E2E2 dashed 1px;
}

.item:hover {
  cursor: pointer;
  border-bottom: 1px solid black;
}

.item:hover {
  cursor: pointer;
  border-bottom: #E2E2E2 solid 1px !important;
  border-top: #E2E2E2 solid 1px !important;
}

.menu:hover .item:not(:hover){
  border-top: #E2E2E2 dashed 1px;
  border-bottom: white 1px solid;
}

.menu:hover .item:first-child {
  border-top: white 1px solid;
  border-bottom: white 1px solid;
}

.item:hover ~ .item {
  border-top: white solid 1px !important;
  border-bottom: #E2E2E2 dashed 1px !important;
}

.item:hover ~ .item:last-child {
  border-top: white solid 1px !important;
  border-bottom: white solid 1px !important;
}

.to-right {
  left: 5px;
}

.to-left {
  right: 205px;
}

</style>
