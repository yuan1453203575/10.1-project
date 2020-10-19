const { model } = require('mongoose');

module.exports = model('goods', {
    id: {
        type: Number,
        required: true,
    },
    goodsname: {
        type: String,
        required: true,
    },
    goodssale: {
        type: Number,
        default: 0,
    },
    goodstype: {
        type: String,
        required: true,
    },
    goodsprice: {
        type: Number,
        required: true,
    },
    goodsnum: {
        type: Number,
        default: 500,
    },
})