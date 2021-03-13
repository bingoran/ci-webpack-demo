const path = require('path');
// node 的工作目录
const rootPath = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


class DoneErrorPlugin {
  constructor(options){
    this.options = options;
  }
  // 插件上的 apply 方法
  apply(compiler){
    //插件的hooks
    compiler.hooks.done.tap('done',(stats) => {
        //  console.log("stats",stats.compilation);
         console.log('build === success');
        if(stats.compilation.error && stats.compilation.error.length && process.argv.indexOf('--watch') === -1){
          console.log('build === error');
          process.exit(1);
        }
    })
    compiler.hooks.done.tap('failed',(stats) => {
        // console.log("stats",stats.compilation.error);
        console.log('build >>> error');
        if(stats.compilation.error && stats.compilation.error.length && process.argv.indexOf('--watch') === -1){
          console.log('build === error');
          process.exit(1);
        }
    })
  }
}

module.exports = {
  entry: path.join(rootPath, 'src/main.js'),
  output: {
    path: path.join(rootPath, 'dist'),
    filename: "js/[name].[chunkhash:8].js",
  },
  module: {
    rules:[
      {
        test: /.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /.(png|jpg|jpeg)$/,
        use: [{
          loader: "url-loader",
          options:{
            // name 同flie-loader
            name: 'images/[name].[hash:5].[ext]',
            // 小于10000字节的转换为DataUrl格式(base64)
            limit: 10000, // 小于10K的图标就直接转化为base64
            // outputPath: 'assets/images/',
            // 是否采用file-loader， 默认采用
            // 还可以用responsive-loader等一些其他loader
            fallback: 'file-loader',
          }
        },{
          loader: 'image-webpack-loader', //压缩图片
          options: {
            disable: false, //是否禁止压缩，默认false
            quality: 80, //压缩质量，也可以是'70-80'
          }
        }]
      },
    ]
  },
  plugins: [
    // 清空打包目录
    new CleanWebpackPlugin(),
    new DoneErrorPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'src/index.html'),
      filename: "index.html",
      inject: true,
    }),
  ]
}