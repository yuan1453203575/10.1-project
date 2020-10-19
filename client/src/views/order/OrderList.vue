<template>
  <div class="order-list">
    <div class="title">
      <h1>订单列表</h1>
      <span>刷新</span>
    </div>
    <div class="top">
      <span>全部订单({{allList.length}})</span>
    </div>
    <div class="list">
        <h1>数据列表</h1>
        <ul>
          <li class="tit">
            <input type="checkbox">
            <span>序号</span>
            <span>图片</span>
            <span>类别</span>
            <span>商品名称</span>
            <span>用户</span>
            <span>价格</span>
            <span>状态</span>
            <span>操作</span>
          </li>
          <li v-for="(item,index) in allList" :key="index">
            <input type="checkbox">
            <span>{{index + 1}}</span>
            <span><img :src="imgUrl" alt=""></span>
            <span>{{item.goodstype}}</span>
            <span>{{item.goodsname}}</span>
            <span>{{item.customerid.account}}</span>
            <span>每件：{{item.goodsprice}}/{{item.goodscount}}件</span>
            <span>{{item.goodsstatus | formatter}}</span>
            <span>
              <em>修改</em>
              <em>删除</em>
            </span>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      imgUrl: '//img.alicdn.com/imgextra/i2/2199920034/O1CN013Witl61C7c16mDjeE_!!0-item_pic.jpg_760x760Q50s50.jpg'
    }
  },
  filters: {
    formatter(value) {
      if(value === 1) {
        return '未发货';
      } else if(value === 2) {
        return '已发货'
      } else {
        return '已完成'
      }
    }
  },
  computed: {
    price() {
      this.allList.map(item => {
        return item.goodsprice * item.goodscount;
      })
    },
    ...mapState({
      allList: (state) => state.order.allList,
    })
  },
  created() {
    this.$store.dispatch('order/requestAllList');
  },  
}
</script>

<style lang="scss" scoped>
.order-list {
  background-color: #FAFAFA;
  .title {
    width: 100%;
    height: 80px;
    background-color: #F2F2F2;
    border-bottom: 1px solid #E4E4E4;
    padding-left: 40px;
    padding-right: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #767676;
      font-size: 18px;
      position: relative;
      &::before {
        content: '';
        display: block;
        width: 10px;
        height: 25px;
        background-color: #0099FF;
        position: absolute;
        left: -20px;
        top: -2px;
      }
    }
    span {
      cursor: pointer;
    }
  }
  .top {
    height: 80px;
    display: flex;
    align-items: center;
    span {
      display: block;
      width: 120px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color:#0099FF;
      margin-left: 20px;
      font-size: 14px;
    }
  }
  .list {
    box-sizing: border-box;
    margin: 0 20px;
    padding: 15px;
    padding-bottom: 0;
    background-color: #F2F2F2;
    h1 {
      font-size: 14px;
      color: #666;
      margin-bottom: 20px;
    }
    ul {
      border: 1px solid #E4E4E4;
      .tit {
        background-color: #E9F3F3;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      li {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 50px;
        border-bottom: 1px solid #e4e4e4;
        color: #929292;
        input {
          margin-left: 50px;
        }
        span {
          display: flex;
          justify-content: center;
          flex: 1;
          img {
            width: 30px;
            height: 30px;
          }
          em {
            font-size: 12px;
            color: #0099FF;
            margin: 0 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>