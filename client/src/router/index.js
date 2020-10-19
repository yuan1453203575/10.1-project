import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoute from './authRoute'
import mainRoute from './mainRoute'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  authRoute,
  mainRoute
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === "login" || to.name === "register") {
    // 登录注册页面
    next();
  } else {
    // 进入项目
    // 判断是否有权限
    if (store.state.user.isLogin) {
      next();
    } else {
      next("/auth");
    }
  }
});

export default router
