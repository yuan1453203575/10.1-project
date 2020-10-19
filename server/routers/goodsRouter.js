const { Router } = require('express');
const router = new Router();
const Goods = require('../model/Goods');
const { mock } = require('mockjs');
// const result = mock({
//     'list|40': [
//         {
//             'id|+1': 100,
//             'goodsname': '@ctitle(4)',
//             'goodstype|1': ['A类','B类','C类'],
//             'goodssale|100-300': 0,
//             'goodsprice|100-300': 0,
//             'goodsnum|200-500': 0,
//         }
//     ]
// }).list
// console.log(result);
// const arr = result.map(item=> {
//     return new Goods(item).save();
// })
// Promise.all(arr).then(res => {
//     console.log(res);
//     console.log('保存成功');
// })
// .catch(error => {
//     console.log(error);
//     console.log('保存失败');
// })


router.post('/goods_info', async (req,res) => {
    const {index} = req.body;
    const goodsList = await Goods.find().skip(index*5).limit(5);
    const goodsAllList = await Goods.find();
    res.status(200).json({code: 0, message: 'ok', data: {all: goodsAllList, one: goodsList}});
})

router.post('/delete_goods',async (req,res) => {
    const {id} = req.body;
    const oneGoodsList = await Goods.findOneAndDelete({id});
})

router.post('/add_goods', async (req,res) => {
    const {id} = req.body;
    console.log(req.body);
    const result = await Goods.findOne({id});
    if(result) {
        res.status(200).json({code: -1, message: '该商品已存在!'});
        return;
    }
    await new Goods(req.body.payload).save();
    res.status(200).json({code: 0, message: '添加成功'});
})

router.post('/select_typegoods', async (req,res) =>  {
    const {goodstype} = req.body;
    const result = await Goods.find({goodstype});
    res.status(200).json({code: 0, message: 'ok', data: result});
})

router.post('/select_oneGoods', async (req,res) => {
    const {id} = req.body;
    const result = await Goods.findOne({id});
    res.status(200).json({code: 0, message: 'ok', data: result});
})

router.post('/categoryList', async (req,res) => {
    const {payload} = req.body;
    console.log(payload);
    let data = [];
    for(var i in payload) {
        var goodstype = payload[i];
        const result = await Goods.find({goodstype});
        // console.log(result);
        data.push(result);
    }
    res.status(200).json({code: 0, message: 'ok', data: data});
})


module.exports = router;