<template>
  <div class="goods-list">
    <div class="title">
      <h1>商品列表</h1>
      <span @click="loadingAction">刷新</span>
    </div>
    <div class="goods">
      <span>全部商品({{goodsList.all.length}})</span>
    </div>
    <div class="list">
      <h1>数据列表</h1>
      <ul>
        <li class="tit">
          <input type="checkbox">
          <span>序号</span>
          <span>图片</span>
          <span>商品名称</span>
          <span>类别</span>
          <span>价格</span>
          <span>销量</span>
          <span>库存</span>
          <span>操作</span>
        </li>
        <li v-for="item in goodsList.one" :key="item.id">
          <input type="checkbox">
          <span>{{item.id}}</span>
          <span><img :src="imgUrl" alt=""></span>
          <span>{{item.goodsname}}</span>
          <span>{{item.goodstype}}</span>
          <span>{{item.goodsprice}}元</span>
          <span>{{item.goodssale}}件</span>
          <span>{{item.goodsnum}}件</span>
          <span>
            <em>修改</em>
            <em @click="deleteAction(item.id)">删除</em>
          </span>
        </li>
      </ul>
      <div class="page">
        <span>共{{pages}}页/{{goodsList.all.length}}条数据</span>
        <ul>
          <li @click="prev">&lt;</li>
          <li v-for="(item,index) in pages" :key="index" @click="changeIndex(index)">{{index+1}}</li>
          <li @click="next">&gt;</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      isShow: false,
      pageIndex: 0,
      imgUrl: '//img.alicdn.com/imgextra/i2/2199920034/O1CN013Witl61C7c16mDjeE_!!0-item_pic.jpg_760x760Q50s50.jpg'
    }
  },
  watch: {
    pageIndex(newVal) {
    this.$store.dispatch('goods/requestGoodsList',newVal);
    },
    goodsList() {
      this.isShow = true;
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.goodsList.all.length/this.goodsList.one.length);
    },
    ...mapState({
      goodsList: (state) => state.goods.goodsList,
    })
  },
  methods: {
    changeIndex(index) {
      this.pageIndex = index;
    },
    prev() {
      this.pageIndex--;
      if(this.pageIndex < 0) {
        this.pageIndex = 0;
      }
    },
    next() {
      this.pageIndex++;
      if(this.pageIndex >= this.pages) {
        this.pageIndex = this.pages;
      }
    },
    deleteAction(id) {
      this.$store.dispatch('goods/deleteGoodsList',id);
    },
    loadingAction() {
      this.$store.dispatch('goods/requestGoodsList',this.pageIndex);
    }
  },
  created() {
    this.$store.dispatch('goods/requestGoodsList',this.pageIndex);
  },
}
</script>

<style lang="scss" scoped>
.goods-list {
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
  .goods {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    span {
      width: 140px;
      height: 30px;
      font-size: 14px;
      background-color: #0099FF;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
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
    .page {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        color: #666;
        margin-left: 100px;
        margin-right: 50px;
      }
      ul {
        display: flex;
        border: none;
        li {
          width: 30px;
          height: 25px;
          margin: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>