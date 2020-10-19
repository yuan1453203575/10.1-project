import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import goods from './modules/goods'
import order from './modules/order'
import customer from './modules/customer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    goods,
    order,
    customer
  }
})
