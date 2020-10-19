<template>
  <div id="register">
    <h1>注册</h1>
    <p><input type="text" placeholder="用户名" v-model="username"/></p>
    <p><input type="text" placeholder="密码" v-model="password"/></p>
    <button @click="registerAction">注册</button>
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
    // 注册
    registerAction(){
      axios.post(
        '/api/user/register',
        {
          username: this.username,
          password: this.password
        }
      )
      .then(data=>{
        console.log(data);
        if(data.data.code === 0){
          //注册成功
          this.$router.push('/auth/login');
        }else{
          //注册失败
          alert(data.data.message);
        }
      })
      .catch(error=>{
        console.log(error);
        alert('注册失败');
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
  background-color: #117F89;
  color: #fff;
  font-size: 16px;
}
</style>