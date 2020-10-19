import axios from 'axios';
export default {
  namespaced: true,
  state: {
    customerInfo: [],
  },
  mutations: {
    setCustomerInfo(state, payload) {
      state.customerInfo = payload;
    }
  },
  actions: {
    requestCustomerInfo(context,payload) {
      if(localStorage.getItem('token')) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        axios.get('/api/customer/customer_info').then(data => {
          const result = data.data.data;
          context.commit('setCustomerInfo', result);
        })
      }
    }
  }
}