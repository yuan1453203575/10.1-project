<template>
  <div class="goods-category">
    <div class="title">
      <h1>商品分类</h1>
      <span>刷新</span>
    </div>
    <div class="list">
      <div class="item" v-for="(item,index) in typeList" :key="index">
        <div class="type">
          <span>{{typeArr[index]}}</span>
        </div>
        <div class="mes">
          <div class="info" v-for="items in item" :key="items.id">
            <span>名称:{{items.goodsname}}</span>
            <span>价格:{{items.goodsprice}}元</span>
            <span>销量:{{items.goodssale}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      typeArr: ['A类','B类','C类']
    }
  },
  computed: {
    ...mapState({
      typeList: (state) => state.goods.typeList,
    })
  },
  created() {
    this.$store.dispatch('goods/requestTypeList',this.typeArr);
  },
}
</script>

<style lang="scss" scoped>
.goods-category {
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
    border: 1px solid #e4e4e4;
    position: absolute;
    background-color: #f2f2f2;
    margin: 20px;
    top: 80px;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      margin-top: 30px;
      .type {
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .mes {
        width: 1200px;
        display: flex;
        flex-wrap: wrap;
        .info {
          display: flex;
          flex-direction: column;
          margin: 4px;
          span {
            font-size: 16px;
            color: #666;
            line-height: 25px;
            &:nth-of-type(2) {
              color: #E52811;
              font-size: 14px;
            }
            &:nth-of-type(3) {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>