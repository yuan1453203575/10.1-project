import axios from 'axios'
export default {
  namespaced: true,
  state: {
    customerList: []
  },
  mutations: {
    setCustomerList(state, payload) {
      state.customerList = payload;
    }
  },
  actions: {
    requestList(context, payload) {
      axios.get('/api/customer/customerList').then(data => {
        context.commit('setCustomerList',data.data.data);
      })
    }
  }
}