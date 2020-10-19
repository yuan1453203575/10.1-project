<template>
  <div class="leftmenu">
      <div class="tit">{{menusData[data].meta.title}}</div>
      <div class="list">
          <div class="item" v-for="(item,index) in menusData[data].children" :key="index" 
          @click="changesIndex(index)" :class="{active: index == showsIndex}">{{item.meta.title}}</div>
      </div>
  </div>
</template>

<script>
import mainRoute from '../router/mainRoute'
export default {
    props: {
        data: Number,
    },
    data() {
        return {
            menusData: mainRoute.children,
            showsIndex: 0,
        }
    },
    methods: {
        changesIndex(index) {
            this.showsIndex = index;
            this.$router.push({name: this.menusData[this.data].children[index].name});
        }
    },
}
</script>

<style lang="scss" scoped>
.leftmenu {
    position: absolute;
    width: 180px;
    left: 0;
    bottom: 0;
    top: 60px;
    border-right: 1px solid #e4e4e4;
    box-sizing: border-box;
    background-color: #F2F2F2;
    .tit {
        width: 100%;
        height: 80px;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: #666;
        border-bottom: 1px solid #e4e4e4;
    }
    .list {
        width: 100%;
        .item {
            width: 100%;
            height: 60px;
            box-sizing: border-box;
            border-bottom: 1px solid #e4e4e4;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #666;
            font-size: 16px;
            &.active {
                background-color: #fff;
                color: #0099FF;
            }
        }
    }
}
</style>