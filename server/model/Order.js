const { model } = require('mongoose');
const mongoose = require('mongoose');
module.exports = model('order',{
    customerid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'customer'//关联了student表格
    },
    id: {
        type: Number,
        required: true,
    },
    goodsname: {
        type: String,
        required: true,
    },
    goodscount: {
        type: Number,
        required: true, 
    },
    goodsstatus:{
        type: Number,
        required: true,//1表示未发货，2表示已发货，3表示已完成
    },
    goodsprice: {
        type: Number,
        required: true,
    },
    goodstype: {
        type: String,
        required: true,
    }
})