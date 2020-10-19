import axios from 'axios'
export default {
    namespaced: true,
    state: {
        typeList: [],
    },
    mutations: {
        setTypeList(state,payload) {
            state.typeList = payload;
        }
    },
    actions: {
        addOrderList(context,payload) {
            console.log(payload);
            axios.post('/api/order/addOrderList',{
                payload,
            })
            .then(data => {
                console.log(data.data.data);
            })
        },
        requestTypeList(context,payload) {
            axios.post('/api/order/selectList', {
                goodsstatus: payload.index,
                customerid: payload._id,
            })
            .then(data => {
                context.commit('setTypeList', data.data.data);
            })
        }
    }
}