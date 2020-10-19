import axios from 'axios'
export default {
    namespaced: true,
    state: {
        goodsList: [],
        goodsTypeList: [],
        detailList: [],
    },
    mutations: {
        setGoodsList(state,payload) {
            state.goodsList = payload;
        },
        setGoodsTypeList(state,payload) {
            state.goodsTypeList = payload;
        },
        setDetailList(state,payload) {
            state.detailList = payload;
        }
    },
    actions: {
        requestGoodsList(context,payload) {
            axios.post('/api/goods/goods_info',{
                index: 0,
            })
            .then(data => {
                context.commit('setGoodsList',data.data.data.all);
            })
        },
        requestTypeGood(conetxt,payload) {
            axios.post('/api/goods/select_typegoods', {
                goodstype: payload,
            })
            .then(data => {
                conetxt.commit('setGoodsTypeList',data.data.data);
            })
        },
        requestDetailList(context,payload) {
            axios.post('/api/goods/select_oneGoods', {
                id: payload,
            })
            .then(data => {
                context.commit('setDetailList',data.data.data);
            })
        }
    }
}