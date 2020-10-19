import axios from 'axios'
export default {
    namespaced: true,
    state: {
        shoppingList:[],
    },
    mutations: {
        setShoppingList(state,payload) {
            state.shoppingList = payload;
        }
    },
    actions: {
        addGoodsList(conetext,payload) {
            console.log(payload);
            axios.post('/api/shopping/findandsaveGoods', {
                id: payload.id,
                _id: payload._id
            })
            .then(data => {
                if(data.data.code === 1) {
                    alert('添加成功');
                }
            })
        },
        requestShoppingList(context,payload) {  
            axios.get('/api/shopping/fingShoppingList')
            .then(data => {
                context.commit('setShoppingList',data.data.data);
                console.log(data.data.data);
            })
        },
        updateCount(context,payload) {
            axios.post('api/shopping/updateGoodsList',{
                payload,
            })
            .then(data => {
            })
        },
        deleteList(context,payload) {
            axios.post('/api/shopping/deleteGoodsList',{
                id: payload,
            })
            .then(data => {
            })
        },
        deleteCheckList(context,payload) {
            axios.post('api/shopping/deleteCheckList', {
                payload,
            })
            .then(data => {
            })
        }
    }
}