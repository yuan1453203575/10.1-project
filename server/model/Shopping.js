const { model } = require('mongoose')
const mongoose = require('mongoose')
module.exports = model('shopping',{
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
    goodsprice: {
        type: String,
        required: true
    },
    goodscount: {
        type: Number,
        default: 1,
    },
    goodsstatus: {
        type: Number,
        defalult: 1,//1表示未发货，2表示已发货，3表示已完成
    },
    goodstype: {
        type: String,
        required: true,
    }
})