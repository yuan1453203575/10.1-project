<template>
  <div class="detail">
      <header>
          <span class="iconfont iconshouye" @click="goBack"></span>
          <h1>{{detailList.goodsname}}</h1>
      </header>
      <div class="list">
          <img :src="imgUrl" alt="">
          <div class="info">
            <h1>{{detailList.goodsname}}</h1>
            <p>￥{{detailList.goodsprice}}</p>
            <em>库存{{detailList.goodsnum}}件</em>
          </div>
      </div>
      <button @click="addShopping(detailList.id)">加入购物车</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            imgUrl: '//img.alicdn.com/imgextra/i2/2199920034/O1CN013Witl61C7c16mDjeE_!!0-item_pic.jpg_760x760Q50s50.jpg',
        }
    },
    computed: {
       ...mapState({
           detailList: (state) => state.goods.detailList,
           customerInfo: (state) => state.my.customerInfo,
       })
    },
    methods: {
        goBack() {
            this.$router.back();
        },
        addShopping(id) {
            console.log(localStorage.getItem('token'));
            if(localStorage.getItem('token')) {
                this.$store.dispatch('shopping/addGoodsList',{id, _id: this.customerInfo._id});
            } else {
                alert('请登录');
                this.$router.push('/login');
            }
            
        }
    },
    created() {
        this.$store.dispatch('goods/requestDetailList',this.$route.params.id);
    },

}
</script>

<style lang="scss" scoped>
.detail {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    background-color: #fff;
    header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E52811;
        position: relative;
        h1 {
            font-size: 18px;
            font-weight: normal;
            color: #fff;
        }
        span {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 30px;
            color: #fff;
        }
    }
    .list {
        img {
            width: 100%;
            height: 375px;
        }
        .info {
            display: flex;
            width: 100%;
            height: 50px;
            align-items: center;
            padding-left: 20px;
            h1 {
                font-size: 20px;
                color: #333; 
            }
            p {
                margin-left: 30px;
                font-size: 16px;
                color: #E52811;
            }
            em {
                font-style: normal;
                font-size: 14px;
                color: #333;
                margin-left: 50px;
            }
        }
    }
    button {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 50px;
        width: 100px;
        height: 40px;
        border-radius: 8px;
        background-color: #E52811;
        color: #fff;
        font-size: 14px;
        border: none;
    }
}
</style>