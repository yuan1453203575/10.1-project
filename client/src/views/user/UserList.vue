<template>
  <div class="user-list">
    <div class="title">
      <h1>用户列表</h1>
      <span @click="loadingAction">刷新</span>
    </div>
    <div class="list">
      <h1>数据列表</h1>
      <ul>
        <li class="tit">
          <input type="checkbox">
          <span>序号</span>
          <span>用户名</span>
          <span>密码</span>
          <span>电话</span>
          <span>邮箱</span>
          <span>操作</span>  
        </li>
        <li v-for="(item,index) in customerList" :key="item.account">
          <input type="checkbox">
          <span>{{index + 1}}</span>
          <span>{{item.account}}</span>
          <span>{{item.password}}</span>
          <span>11111111111</span>
          <span>123456@qq.com</span>
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
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      customerList: (state) => state.customer.customerList,
    })
  },
  methods: {
    loadingAction() {
      this.$store.dispatch('customer/requestList');
    }
  },
  created() {
    this.$store.dispatch('customer/requestList');
  },

}
</script>

<style lang="scss" scoped>
.user-list {
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