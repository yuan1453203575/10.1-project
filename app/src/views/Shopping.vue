<template>
  <div class="page shopping">
    <span>购物车</span>
    <div class="con">
      <scroll class="content">
        <div class="list" v-for="item in shoppingList" :key="item.id">
          <input type="checkbox" :value="item" v-model="check">
          <img :src="imgUrl" alt="">
          <h1>{{item.goodsname}}</h1>
          <div class="num">
            <span @click="prev(item)">-</span>
            <span>{{item.goodscount}}</span>
            <span @click="next(item)">+</span>
          </div>
          <p>{{item.goodsprice}}每件</p>
          <em @click="deleteShopping(item.id)">删除</em>
        </div>
        <div v-if="allSum != 0">总价:{{allSum}}</div>
      </scroll>
    </div>
    <button v-if="allSum != 0" @click="buyGoods">立即购买</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
        return {
            imgUrl: '//img.alicdn.com/imgextra/i2/2199920034/O1CN013Witl61C7c16mDjeE_!!0-item_pic.jpg_760x760Q50s50.jpg',
            check: [],
        }
    },
  computed: {
    allSum() {
      var sum = 0;
      for(var i in this.check) {
        sum += this.check[i].goodscount * this.check[i].goodsprice;
      }
      return sum;
    },
    ...mapState({
      customerInfo: (state) => state.my.customerInfo,
      shoppingList: (state) => state.shopping.shoppingList,
    })
  },
  methods: {
    prev(item) {
      item.goodscount--;
      if(item.goodscount <= 0) {
        item.goodscount = 1;
        alert('数量不能为0');
      } else {
        this.$store.dispatch('shopping/updateCount',{id: item.id, type: 'prev'});
      }
    },
    next(item) {
      item.goodscount++;
      this.$store.dispatch('shopping/updateCount',{id: item.id, type: 'next'});
    },
    deleteShopping(id) {
      this.$store.dispatch('shopping/deleteList',id);
      this.$store.dispatch('shopping/requestShoppingList');
    },
    buyGoods() {
      console.log(this.check);
      console.log(this.customerInfo);
      this.$store.dispatch('order/addOrderList',{check:this.check, _id: this.customerInfo._id});
      this.$store.dispatch('shopping/deleteCheckList',this.check);
      this.$store.dispatch('shopping/requestShoppingList');
    }
  },
  created() {
    this.$store.dispatch('shopping/requestShoppingList');
  },

}
</script>

<style lang="scss" scoped>
span {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #333;
}
.con {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  top: 30px;
  .content {
    width: 100%;
    height: 100%;
    .list {
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      align-items: center;
      input {
        width: 10px;
        height: 10px;
        margin-right: 10px;
      }
      img {
        width: 60px;
        height: 60px;
      }
      h1 {
        margin-left: 10px;
        font-size: 20px;
        color: #333;
        margin-right: 10px;
      }
      .num {
        display: flex;
        border: 1PX solid #666;
        margin-right: 10px;
        span {
          width: 20px;
          height: 20px;
          border-right: 1PX solid #666;
          &:nth-of-type(3) {
            border-right: none;
          }
        }
      }
      em {
        font-size: 12px;
        color: #E52811;
        margin-left: 20px;
      }
    }
  }
}
button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #fff;
  border-radius: 10px;
  background-color: #E52811;
  border: none;
}
</style>