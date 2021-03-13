const { merge } = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");
const rootPath = process.cwd();

const baseConfig = require("./webpack.base.js");
const devConfig = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
    ]
  },
  devServer: {
    filename: path.join(rootPath, './dist'), // dev-server 服务的目录
    hot: true, // 开启热更新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(baseConfig, devConfig);