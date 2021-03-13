const path = require("path");
const { merge } = require("webpack-merge");
const Cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require("./webpack.base.js");
const proConfig = {
  mode: "production",
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
                localIdentName: '[hash:base64:8]',
                // localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              // onlyLocals: true, // 服务端渲染比较有用
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
    ]
  },
  plugins: [
    // 将 css 提取为单独的文件
    // 提取css
    new MiniCssExtractPlugin({
      ignoreOrder: true, // 去除因为css文件在不同文件夹引入顺序不同出现的warning
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // 压缩 css | scss
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.s?css$/g,
      cssProcessor: Cssnano,
      //传递给cssProcessor的选项，默认为{}
      cssProcessorOptions: { 
        discardComments: { removeAll: true },
        // 在安全模式下运行 cssnano 从而避免潜在的不安全转换
        safe: true,
      },
      //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
      canPrint: true,
    })
  ]
}

module.exports = merge(baseConfig, proConfig);