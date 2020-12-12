/**
 * 多页面配置
 */

const path = require('path')
// html模板
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 每次打包清空dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  // entry: ['./src/index.js', './src/login.js'],    // 入口文件,多入口文件可用数组，但是打包后悔合成一个
  entry: { // 多入口文件，以对象形式，打包成多个文件
    index: './src/index.js',
    login: './src/login.js'
  },
  output: {   // 出口文件
    // [name]将和入口文件一一对应
    // 添加hash防止文件缓存
    filename: '[name].[hash:4].js',
    path: path.resolve('dist') // 打包后的文件目录
  },
  module: {},   // 处理对应模块
  plugins: [ // 对应的插件
    // 打包前清空
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 以index.html作为模板地址
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      // 以index.html作为模板地址
      template: './src/login.html',
      filename: 'login.html',
      chunks: ['login'],
    })
  ],
  devServer: {},  // 开发服务器配置
  mode: 'development'  // 模式配置
}