import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods'
import shopping from './modules/shopping'
import order from './modules/order'
import my from './modules/my'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    goods,
    shopping,
    order,
    my
  }
})
