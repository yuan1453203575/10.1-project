<template>
  <div class="register page">
    <h1>登录</h1>
    <p><label>用户：</label> <input type="text" placeholder="请输入用户名" v-model="account"></p>
    <p><label>密码：</label> <input type="text" placeholder="请输入密码" v-model="password"></p>
    <button @click="confirmAction">登录</button>
    <span @click="goRegister">点击去注册</span>
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
    confirmAction() {
      axios.post('/api/customer/login',{
        account: this.account,
        password: this.password,
      })
      .then(data => {
        if(data.data.code === 0) {
          localStorage.setItem('token', data.data.data.token);
          console.log(data.data.data.token);
          this.$router.push('/my');
        }
      })
    },
    goRegister() {
      this.$router.push('/register');
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