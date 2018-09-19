const express = require('express')
const app = express()

// webpack配置
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./build/webpack.base.config.js')
const compiler = webpack(config)
// 使用webpack-dev-middleware，将webpack处理的文件发送给服务器
app.use(webpackDevMiddleware(compiler,{
  publicPath: config.output.publicPath,
  onInfo:true
}))
// 使用webpack-hot-middleware，设置模块热替换
app.use(webpackHotMiddleware(compiler))

// 中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// 接口路由
app.use('/api', require('./routers/api'))

// 数据库连接
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017', function(err){
  if (err) {
  	console.log(err)
  } else {
  	console.log('link success')
  	app.listen(3000, function(){
	  console.log('监听端口3000')
	})
  }
})
// app.listen(3000, function(){
//   console.log('监听端口3000')
// })
