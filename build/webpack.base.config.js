var path = require('path')
var webpack = require('webpack')
var cleanWebpackPlugin = require('clean-webpack-plugin')
var htmlwebpackplugin = require('html-webpack-plugin')
var config = {
  entry: './src/index.js',
  output: {
  	filename: '[name].js',
  	path: path.resolve(__dirname, 'dist'),
    // 自动编译代码
    publicPath: '/'
  },
  // 追踪代码错误和警告
  devtool: 'inline-source-map',
  //vue
  //开发环境，若需要完整版（编译器），设置此项
  //生产环境下，不需要打包编译器的，用运行时版本即可
  resolve:{
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  // 预编译处理
  module: {
    rules: [
      {
      	test: /\.css$/,
      	use: [
          'style-loader',
          'css-loader'
      	]
      },
      {
      	test: /\.vue$/,
      	loader: 'vue-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(ttf|woff|eot)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins:[
    // 清理dist文件
    new cleanWebpackPlugin(['dist']),
    // 打包html
    new htmlwebpackplugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html')
    }),
    // 热模块替换设置
    // new webpack.optimize.OccurenceOrderPlugin(), --webpack1.x时设置
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NoEmitOnErrorsPlugin() --webpack1.x时设置
  ]
}
module.exports = config