<template>
  <div id="auth">
    <nav>
      <router-link to="/auth/login">登录</router-link>
      <router-link to="/auth/register">注册</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){
    
  }

}
</script>

<style lang="scss" scoped>
#auth{
  width: 500px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #585E6C;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  nav {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 20px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 40px;
    a {
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>