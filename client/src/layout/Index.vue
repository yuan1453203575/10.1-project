<template>
  <div class="index">
    <top-menu @changeIndex="showIndex"/>
    <left-menu :data="menusIndex"/>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopMenu from './topmenu'
import LeftMenu from './leftmenu'
export default {
  data() {
    return {
      menusIndex: 0,
    }
  },
  components: {
    TopMenu,
    LeftMenu
  },
  methods: {
    showIndex(index) {
      this.menusIndex = index;
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  left: 180px;
  top: 60px;
  bottom: 0;
  right: 0;
}
</style>