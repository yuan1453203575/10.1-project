<template>
  <div class="my page">
      <h2 v-if="isShow">{{customerInfo.account}}
        <span class="iconfont iconzhuxiao" @click="cancelAction"></span>
      </h2>
      <div class="type">
        <span v-for="(item,index) in typeArr" :key="index" @click="changeIndex(index)" :class="{active: index == typeIndex}">{{item}}</span>
      </div>
      <div class="list">
        <div class="item" v-for="(item,index) in typeList" :key="index">
          <img :src="imgUrl" alt="">
          <div class="info">
            <p>{{item.goodsname}}</p>
            <div class="count">
              <span>{{item.goodstype}}</span>
              <span>{{item.goodscount}}件</span>
              <span class="price">每件:{{item.goodsprice}}元 / 共{{item.goodscount}}件</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      customer: '', 
      typeArr: ['未发货','已发货','已完成'],
      typeIndex: 0,
      imgUrl: '//img.alicdn.com/imgextra/i2/2199920034/O1CN013Witl61C7c16mDjeE_!!0-item_pic.jpg_760x760Q50s50.jpg',
    }
  },
  watch: {
    typeIndex(newVal) {
      this.$store.dispatch('order/requestTypeList', {index:newVal + 1, _id: this.customerInfo._id});
    }
  },
  computed: {
    isShow() {
      if(localStorage.getItem('token')) {
        return true;
      } else {
        return false;
      }
    },
    ...mapState({
      typeList: (state) => state.order.typeList,
      customerInfo: (state) => state.my.customerInfo,
    })
  },
  methods: {
    changeIndex(index) {
      this.typeIndex = index;
    },
    cancelAction() {
      localStorage.setItem('token', '');
      this.$router.push('/');
    }
  },
  created() {
    this.$store.dispatch('my/requestCustomerInfo');
    this.$store.dispatch('order/requestTypeList', {index:this.typeIndex + 1, _id: this.customerInfo._id});
  },
}
</script>

<style lang="scss" scoped>
h2 {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #666;
  position: relative;
  span {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
}
.type {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1PX solid #666;
  border-top: 1PX solid #666;
  span {
    width: 33%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1PX solid #666;
    font-size: 16px;
    color: #333;
    &:nth-of-type(3) {
      border-right: none;
    }
    &.active {
      color: #fff;
      background-color: #E52811;
    }
  }
}
.list {
  width: 100%;
  margin-top: 10px;
  .item {
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 5px 0;
    height: 80px;
    img {
      width: 80px;
      height: 80px;
      margin-right: 20px;
    }
    .info {
      display: flex;
      flex-direction: column;
    }
    p {
      font-size: 20px;
      color: #333;
      margin-bottom: 20px;
    }
    .count {
      display: flex;
      justify-content: space-around;
      span {
      font-size: 14px;
      color: #999;
      margin-right: 20px;
      &.price {
        color: #E52811;
      }
    }
    }  
   
  }
}
</style>