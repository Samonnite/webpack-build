## 从零搭建webpack

1. 安装webpack webpack-cli
2. 创建webpack.config.js，配置webpack

```
module.exports = {
    entry: '',               // 入口文件
    output: {},              // 出口文件
    module: {},              // 处理对应模块
    plugins: [],             // 对应的插件
    devServer: {},           // 开发服务器配置
    mode: 'development'      // 模式配置
}
```
启动devServer需要安装webpack-dev-server：yarn add webpack-dev-server

3. 构建webpack.config.js