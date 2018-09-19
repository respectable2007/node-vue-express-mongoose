var mongoose = require('mongoose')
var user = require('../schemas/user')
// 根据数据结构创建模型类
module.exports = mongoose.model('User', user)