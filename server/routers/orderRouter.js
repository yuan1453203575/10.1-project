const { Router } = require('express');
const Order = require('../model/Order');
const router = new Router();


router.post('/addOrderList', async (req,res) => {
    const {payload} = req.body;
   const arr = payload.check.map(item => {
       console.log(item);
       return new Order( item ).save();
   })
   Promise.all(arr).then(res => {
       console.log(res);
       console.log('保存成功');
   })
   .catch(error => {
       console.log(error);
       console.log('保存失败');
   })
})

router.post('/selectList', async (req,res) => {
    const { goodsstatus, customerid } = req.body;
    console.log(goodsstatus, customerid);

    const result = await Order.find({customerid});
    const list = result.filter(item => item.goodsstatus === goodsstatus);
    res.status(200).json({code: 0, message: 'ok', data: list});
})

router.get('/allList', async (req,res) => {
    const result = await Order.find().populate(['customerid']);
    res.status(200).json({code: 0, message: 'ok', data: result});
})




module.exports = router;
