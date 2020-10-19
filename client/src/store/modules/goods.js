import axios from 'axios'
export default {
    namespaced: true,
    state: {
        goodsList: [],
        typeList: []
    },
    mutations: {
        setGoodsList(state,payload) {
            state.goodsList = payload;
        },
        setTypeList(state,payload) {
            state.typeList = payload;
        }
    },
    actions: {
        requestGoodsList(context,payload) {
            axios.post('/api/goods/goods_info',{
                index: payload,
            })
            .then(data => {
                context.commit('setGoodsList',data.data.data);
            })
        },
        deleteGoodsList(context,payload) {
            axios.post('/api/goods/delete_goods',{
                id: payload,
            })
            .then(data => {
            })
        },
        addGoodsList(context,payload) {
            axios.post('/api/goods/add_goods',{
                payload,
            })
            .then(data => {
                if(data.data.code == 0) {
                    alert(data.data.message);
                }
            })
        },
        requestTypeList(context,payload) {
            axios.post('/api/goods/categoryList',{
                payload,
            })
            .then(data => {
                context.commit('setTypeList',data.data.data);
            })
        }
    }
}