import axios from 'axios'
export default {
  namespaced: true,
  state: {
    allList: [],
  },
  mutations: {
    setAllList(state, payload) {
      state.allList = payload;
    }
  },
  actions: {
    requestAllList(context,payload) {
      axios.get('/api/order/allList').then(data => {
        context.commit('setAllList', data.data.data);
        console.log(data.data.data);
      })
    }
  }
}