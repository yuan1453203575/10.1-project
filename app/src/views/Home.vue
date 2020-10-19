<template>
  <div class="home">
    <header>
      <h1>商城</h1>
    </header>
    <nav>
      <router-link to="/index">
        <span class="iconfont iconshouye"></span>
        <span>首页</span>
      </router-link>
      <router-link to="/category">
        <span class="iconfont iconleimupinleifenleileibie"></span>
        <span>分类</span>
      </router-link>
      <router-link to="/shopping">
        <span class="iconfont icongouwuche"></span>
        <span>购物车</span>
      </router-link>
      <router-link to="/my">
        <span class="iconfont icon04"></span>
        <span>我的</span>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  width: 100%;
  left: 0;
  top: 50px;
  bottom: 48px;
}
header {
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: #3D0F09;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 20px;
  }
}
nav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  z-index: 100;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      display: block;
      font-size: 14px;
      color: #333;
    }
    .iconfont {
      font-size: 20px;
      margin-bottom: 3px;
    }
    &.router-link-active {
      color: #E52811;
    }
  }
 
}

</style>