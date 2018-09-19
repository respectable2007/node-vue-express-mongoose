var express = require('express')
var router = express.Router()
var User = require('../models/user')
// 使用express中间件，设置共有参数
var responseData = {}
router.use(function(req,res,next){
  responseData = {
  	code: 0,
  	message: ''
  }
  next()
})
/**
 * 用户登录的逻辑
 * 1.用户名不能为空
 * 2.密码不能为空
 * 3.连接数据库，验证用户名和密码是否正确
 * */ 
router.post('/login', function(req,res) {
  var name = req.body.name
  var pwd = req.body.pwd
  if (name === '') {
    responseData = {
      code: 500,
      message: '用户名不可为空'
    }
    res.json(responseData)
    return
  }
  if (pwd == '') {
    responseData = {
      code: 500,
      message: '密码不可为空'
    }
    res.json(responseData)
    return
  }
  /**
   * 数据库验证
   * 1.引用模型类
   */
  User.findOne({
    name: name
  }).then(function(data) {
    if (!data) {
      responseData = {
        code: 500,
        message: '用户名不存在'
      }
      res.json(responseData)
    } else {
      if (data.pwd !== pwd) {
        responseData = {
          code: 500,
          message: '密码错误'
        }
        res.json(responseData)
      } else {
        responseData = {
          code: 200,
          message: '登录成功'
        }
        res.json(responseData)
      }
    }
  })
})

/**
 * 获取用户列表
 */
router.get('/users', function(req,res){
  User.find()
      .then(function(users){
        responseData = {
          code: 200,
          data: users
        }
        res.json(responseData)
      })
})
module.exports = router

/**
 * 保存数据到数据库
 * mongoose.save
 */
// var user = new User({
//   name:name,
//   pwd:pwd
// })
// return user.save()