import axios from "axios";

export default {
  namespaced: true,
  state: {
    // 是否登录，取上一次退出的状态，如果没有值就是false
    isLogin: Boolean(Number(localStorage.getItem('isLogin'))),
    userInfo: [],
  },
  mutations: {
    setIsLogin(state, payload) {
      state.isLogin = payload;
    },
    setUserInfo(state,payload) {
      state.userInfo = payload;
    }
  },
  actions: {
    // 修改登录状态，需要同步localStorage
    changeLoginAction(context, payload){
      if(payload){
        localStorage.setItem('isLogin', 1);
      }else{
        localStorage.setItem('isLogin', 0);
      }
      context.commit('setIsLogin', payload);
    },
    checkLogin(context, payload) {
      //检查用户是否登录了
      axios.get("/api/user/check_login").then((data) => {
        if (data.data.code === 0) {
          // 登录没有过期
          localStorage.setItem('isLogin', 1);
          // 修改仓库数据
          context.commit("setIsLogin", true);
        }else{
          // 没有登录，或者过期了
          localStorage.setItem('isLogin', 0);
          context.commit("setIsLogin", false);
        }
      });
    },
    requestUserInfo(context,payload) {
      axios.get('/api/user/user_info')
      .then(data => {
        context.commit('setUserInfo',data.data.data);
      })
    },
  },
};
