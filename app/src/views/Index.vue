<template>
<div>
  <div class="index page">
      <div class="con">
        <scroll class="content">
            <div class="list">
                <div class="item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
                    <img :src="imgUrl" alt="">
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
            imgUrl: '//img.alicdn.com/imgextra/i2/2199920034/O1CN013Witl61C7c16mDjeE_!!0-item_pic.jpg_760x760Q50s50.jpg'
        }
    },
    computed: {
        ...mapState({
            goodsList: (state) => state.goods.goodsList,
        })
    },
    methods: {
        goDetail(id) {
            this.$router.push({name: 'index-detail',params:{id}});
        }
    },
    created() {
        this.$store.dispatch('goods/requestGoodsList');
    },

}
</script>

<style lang="scss" scoped>
.con {
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0;
    width: 100%;
    .content {
        width: 100%;
        height: 100%;
        .list {
            margin-top: 10px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            box-sizing: border-box;
            padding:  0 1%;
            .item {
                width: 49%;
                height: 230px;
                position: relative;
                img {
                width: 100%;
                height: 180px;
                }
                h1 {
                    margin-left: 10px;
                    font-size: 18px;
                    line-height: 25px;
                    color: #333;
                    margin-bottom: 5px;
                }
                p {
                    margin-left: 10px;
                    font-size: 14px;
                    color: #E52811;
                }
                span {
                    position: absolute;
                    right: 3px;
                    bottom: 15px;
                }
            }
        }
    }
}
</style>