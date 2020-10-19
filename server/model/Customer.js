const {model} = require('mongoose');

module.exports = model('customer', {
  account: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})