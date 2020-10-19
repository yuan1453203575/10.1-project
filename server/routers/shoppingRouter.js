const { Router } = require('express');
const Shopping = require('../model/Shopping');
const Goods = require('../model/Goods');
const router = new Router();

router.post('/findandsaveGoods', async(req,res) => {
    const {id, _id} = req.body;
    const result = await Goods.findOne({id});
    const shopResult = await Shopping.findOne({id});
    if(shopResult) {
        let count = shopResult.goodscount + 1;
        await Shopping.updateOne({id},{goodscount: count});
    } else {
        const add = new Shopping({
            customerid: _id,
            id: result.id,
            goodsstatus: Math.ceil(Math.random()*3),
            goodsname: result.goodsname,
            goodsprice: result.goodsprice,
            goodstype: result.goodstype,
        })
        await add.save();
    }
    res.status(200).json({code: 1, message: 'ok'});
})

router.get('/fingShoppingList', async (req,res) => {
    const result = await Shopping.find();
    res.status(200).json({code: 1, message: 'ok', data: result});
})

router.post('/updateGoodsList', async (req, res) => {
    const {payload:{id,type}} = req.body;
    const shopResult = await Shopping.findOne({id});
    if(type == 'prev') {
        console.log('1');
        await Shopping.updateOne({id},{goodscount: shopResult.goodscount - 1});
    } else if(type == 'next') {
        await Shopping.updateOne({id},{goodscount: shopResult.goodscount + 1});
    }
    res.status(200).json({code: 0, message: '修改成功'});
})

router.post('/deleteGoodsList', async (req,res) => {
    const {id} = req.body;
    await Shopping.deleteOne({id});
    res.status(200).json({code: 0, message: '删除成功'});
})

router.post('/deleteCheckList', async (req, res) => {
    const {payload} = req.body;
    for(var i in payload) {
        let id = payload[i].id;
        await Shopping.deleteOne({id});
    }
})





module.exports = router;