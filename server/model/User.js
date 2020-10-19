const {model} = require('mongoose');

module.exports = model('user',{
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: '1453000@qq.com',
    },
    phone: {
        type: Number,
        default: 111111111,
    }
});