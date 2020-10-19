<template>
  <div class="header">
        <div class="img">
          <img :src="logoUrl" alt="">
        </div>
        <div class="title">
          <h3>猫眼</h3>
          <p>在线选座，热门影讯，爱上看电影</p>
        </div>
        <div class="open">
          <span>打开App</span>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        logoUrl:'//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png',
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
  height: 64px;
  width: 100%;
  background-color:#fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  border-bottom: 1PX solid #777;
  padding: 15px;
  .img {
    width: 44px;
    height: 44px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    margin-left: 5px;
    width: 180px;
    h3 {
      font-size: 17px;
      color: #222;
      margin-bottom: 5px;
    }
    p {
      font-size: 12px;
      color: #777;
    }
  }
  .open {
    padding-left: 48px;
    span {
      display: block;
      width: 68px;
      height: 30px;
      background-color: #ef4238;
      color: #fff;
      border-radius: 3px;
      text-align: center;
      font-size: 12px;
      line-height: 30px;
    }
  }
}

</style>