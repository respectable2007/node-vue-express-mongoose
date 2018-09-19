var mongoose = require('mongoose')
// 数据结构
var user = new mongoose.Schema({
  name: String,
  pwd: String
})

module.exports = user