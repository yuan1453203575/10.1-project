<template>
  <div class="topmenu">
      <div class="logo">
          <span class="iconfont icongouwuche"></span>
          <h1>商城后台管理</h1>
      </div>
      <nav class="menuList">
        <span v-for="(item,index) in menuData" :key="item.name" @click="changeIndex(index)"
        :class="{active: index == menuIndex}">{{item.meta.title}}</span>
      </nav>
      <div class="right">
          <span class="iconfont icon04"></span>
          <span class="name">{{userInfo.username}}</span>
          <span class="iconfont iconlingdang"></span>
          <span class="iconfont iconzhuxiao" @click="cancel"></span>
      </div>  
  </div>
</template>

<script>
import mainRoute from '../router/mainRoute'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            menuData: mainRoute.children,
            menuIndex: 0,
        }
    },
    computed: {
        ...mapState({
            userInfo: (state) => state.user.userInfo,
        })
    },
    methods: {
        changeIndex(index) {
            this.menuIndex = index;
            this.$router.push({name: this.menuData[index].name});
            this.$emit('changeIndex',index);
        },
        cancel() {
            axios.get('/api/user/logout')
                .then(data => {
                    if(data.data.code == 0) {
                    this.$store.dispatch('user/changeLoginAction', false);
                    }
                })
            }
    },
    created() {
        this.$store.dispatch('user/requestUserInfo');
    },
}
</script>

<style lang="scss" scoped>
.topmenu {
    width: 100%;
    height: 60px;
    background-color: #585E6C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 15px;
    position: relative;
    .logo {
        display: flex;
        align-items: center;
        color: #fff;
        span {
            font-size: 30px;
            margin-right: 5px;
        }
        h1 {
            font-size: 20px;
        }
    }
    .menuList {
        display: flex;
        height: 60px;
        span {
            height: 60px;
            line-height: 60px;
            padding: 0 25px;
            color: #fff;
            font-size: 16px;
            &.active {
                font-weight: 700;
                background-color: #9699A2;
            }
        }
    }
    .right {
        height: 60px;
        display: flex;
        align-items: center;
        span {
            // line-height: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 26px;
            margin-right: 10px;
        }
        .name {
            font-size: 22px;
        }
    }
}
</style>