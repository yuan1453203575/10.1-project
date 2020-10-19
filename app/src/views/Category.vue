<template>
<div>
  <div class="category page">
    <nav>
      <span v-for="(item,index) in typeList" :key="index" :class="{active: index == showIndex}" @click="changeIndex(index)">
        {{item}}
      </span>
    </nav>
    <div class="con">
      <scroll class="content">
        <div class="list" v-for="item in goodsTypeList" :key="item.id" @click="goDetail(item.id)">
          <img :src="imgUrl" alt="">
          <div class="info">
            <h1>{{item.goodsname}}</h1>
            <p>￥{{item.goodsprice}}</p>
            <span>{{item.goodssale}}人购买</span>
          </div>
        </div>
      </scroll>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      typeList: ['A类','B类','C类'],
      imgUrl: '//img.alicdn.com/imgextra/i2/2199920034/O1CN013Witl61C7c16mDjeE_!!0-item_pic.jpg_760x760Q50s50.jpg',
      showIndex: 0,
    }
  },
  watch: {
    showIndex(newVal) {
      this.$store.dispatch('goods/requestTypeGood', this.typeList[newVal]);
    }
  },
  computed: {
    ...mapState({
      goodsTypeList: (state) => state.goods.goodsTypeList,
    })
  },
  methods: {
    changeIndex(index) {
      this.showIndex = index;
    },
    goDetail(id) {
      this.$router.push({name: 'category-detail',params:{id}});
    }
  },
  created() {
    this.$store.dispatch('goods/requestTypeGood', this.typeList[this.showIndex]);
  },

}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1PX solid #666;
  span {
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #333;
    border-right: 1PX solid #666;
    &:nth-of-type(3) {
      border-right: none;
    }
    &.active {
      background-color: #E52811;
      color: #fff;
    }
  }
}
.con {
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  width: 100%;
  .content {
    width: 100%;
    height: 100%;
    padding-top: 10px;
    .list {
      width: 100%;
      height: 120px;
      box-sizing: border-box;
      padding: 0 10px;
      display: flex;
      img {
        width: 110px;
        height: 110px;
      }
      .info {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        width: 230px;
        h1 {
          font-size: 20px;
          color: #333;
          margin-bottom: 30px;
        }
        p {
          color: #E52811;
          font-size: 16px;
        }
        span {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
</style> 