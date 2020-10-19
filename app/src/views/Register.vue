<template>
  <div class="register page">
    <h1>注册</h1>
    <p><label>用户：</label> <input type="text" placeholder="请输入用户名" v-model="account"></p>
    <p><label>密码：</label> <input type="text" placeholder="请输入密码" v-model="password"></p>
    <button @click="loginAction">注册</button>
    <span @click="goLogin">点击去登录</span>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      account: '',
      password: '',
    }
  },
  methods: {
    loginAction() {
      console.log(this.account);
      axios.post('/api/customer/register', {
        account: this.account,
        password: this.password
      })
      .then(data => {
        if(data.data.code === 0) {
          this.$router.push('/login');
        }
      })
      .catch(error => {
        console.log(error);
      })
    },
    goLogin() {
      this.$router.push('/login');
    }
  },
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  p {
    width: 100%;
    height: 30px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    label {
      font-size: 15px;
    }
    input {
      width: 150px;
      height: 30px;
      border: 1PX solid #333;
      font-size: 18px;
    }
  }
  button {
    width: 100px;
    height: 30px;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    position: absolute;
    left: 50%;
    bottom: 300px;
    transform: translateX(-50%);
  }
  span {
    margin-top: 20px;
  }
}
</style>