const {Router} = require('express');
const JWT = require('jsonwebtoken');
const Customer = require('../model/Customer');
const config = require('../config');
const router = new Router();

//注册
router.post('/register', async (req, res) => {
  try {
    //获取参数
    const {account, password} = req.body;
    //判断账号是否存在
    const result = await Customer.findOne({account});
    if(result) {
      //存在
      res.json({code: -2, message: '该账号已存在'});
      return;
    }
    //注册
    const customer = new Customer({
      account,
      password,
    }).save();
    //响应客户端
    res.json({code: 0, message: 'ok'});
  } catch (error) {
    res.json({code: -1, message: 'error'});
  }

});
//登录
router.post('/login', async (req, res) => {
  try {
    //取参数
    const { account, password } = req.body;
    const result = await Customer.findOne({account, password},{password: false});
    if(result) {
      //使用jwt保存用户登陆状态
      //第一步：生成token
      const token = JWT.sign({account: result.account}, config.token_key, {expiresIn: config.expiresIn});
      //第二步：保存token
      res.json({code: 0, message: '登陆成功',data: {token}});
    } else {
      res.json({code: -2, message: '用户名或密码错误!'});
    }
     
  } catch (error) {
    
  }
})
//查询用户信息
router.get('/customer_info', async (req, res) => {
  //session: 将数据库放在服务器中， token: 将数据存放在客户端（数据加密）
  try {
    //获得用户的token
    const token = req.headers['authorization'].replace('Bearer ', '');
    //解析token
    const result = JWT.verify(token, config.token_key);
    //使用  
    const customerInfo = await Customer.findOne({account: result.account},{password: false});
    //响应客户端
    res.json({code: 0, message: 'ok', data: customerInfo});
  } catch (error) {
    res.json({code: -1, message: 'error'});
  }
 
})

router.get('/customerList', async (req, res) => {
  const result = await Customer.find();
  res.json({code: 0, message: 'ok', data: result});
})

module.exports = router;