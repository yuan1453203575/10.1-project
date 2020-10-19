const {Router} = require('express');
const User = require('../model/User');
const router = new Router();
//注册
router.post('/register',async (req,res) => {
    //取得请求参数
    const {username,password} = req.body;
    //判断用户是否存在
    const result = await User.findOne({username});
    if(result) {
        res.status(200).json({code: -1, message: '该用户已存在!'});
        return;
    }
    //执行注册
    await new User(req.body).save();
    res.status(200).json({code: 0, message: '注册成功!'});

});
//登录
router.post('/login',async (req,res) => {
    //取得请求参数
    const {username,password} = req.body;
    //查询用户名和密码是否正确
    const result = await User.findOne({username,password},{password: false});
    if(!result) {
        res.status(200).json({code: -1, message: '用户名或密码错误!'});
        return;
    }
    //正确登陆成功设置登录态
    req.session.user = result;
    res.status(200).json({code: 0, message: '登陆成功'})
});
//凡是需要执行其他用户相关的操作，都需要登陆过的
router.use((req,res,next) => {
    if(req.session.user) {
        next();
    } else {
        res.status(200).json({code: -1, message: '请先登录!'});
    }
});
//检查登录是否过期
router.use('/check_login',(req,res) => {
    res.status(200).json({code: 0, message: '登陆成功!'});
})

//退出登录
router.get('/logout',(req,res) => {
    //删除session中的用户数据
    delete req.session.user;
    //响应客户端
    res.status(200).json({code: 0, message: '退出成功'});
})
//获取用户信息
router.get('/user_info',async (req,res) => {
    //获得用户ID
    const userID = req.session.user._id;
    //查询用户数据
    const result = await User.findById(userID,{password: false});
    //响应客户端
    res.status(200).json({code: 0, message: 'ok', data: result});
})

router.get('/userList', async (req, res) => {
    const result = await User.find();
    res.status(200).json({code: 0, message: 'ok', data: result});
})

router.post('/deleteUser', async (req,res) => {
    const {username} = req.body;
    await User.findOneAndDelete({username});
})
 
module.exports = router;