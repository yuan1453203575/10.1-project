<template>
  <div id="login">
    <h1>登录</h1>
    <p><input type="text" placeholder="用户名" v-model="username"/></p>
    <p><input type="password" placeholder="密码" v-model="password"/></p>
    <button @click="loginAction">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 登录
    loginAction(){
      axios.post(
        '/api/user/login',
        {
          username: this.username,
          password: this.password
        }
      )
      .then(data=>{
        if(data.data.code === 0){
          //登录成功
          this.$store.dispatch('user/changeLoginAction', true);
          this.$router.push({name: 'home'});
        }else{
          // 登录失败
          alert(data.data.message);
        }
      })
      .catch(error=>{
        console.log(error);
        alert('登录失败');
      })
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
  line-height: 60px;
  font-size: 25px;
  text-align: center;
  color: #fff;
}
p {
  margin: 10px 0;
  input {
    width: 180px;
    height: 24px;
  }
}
button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 80px;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #20B570;
  color: #fff;
  font-size: 16px;
}
</style>