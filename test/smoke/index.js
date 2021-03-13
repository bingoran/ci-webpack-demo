const path = require('path');
const webpack = require('webpack');
const Mocha = require('mocha');

const prodConfig = require('../../lib/webpack.pro');
const mocha = new Mocha({
  // timeout: "10000ms", // 超时时间 
});
// 调用 webpack 函数，查看构建结果
webpack(prodConfig, (err, stats) => {
  if(err){
    console.error(err);
    process.exit(2);
  }

  console.log("======================");
  // console.log(stats.toString({
  //   colors: true,
  //   modules: false,
  //   children: false
  // }));
  // mocha addFile 添加用例
  mocha.addFile(path.join(__dirname,"html-test.js"));
  mocha.addFile(path.join(__dirname,"css-js-test.js"));
  // 跑用例
  mocha.run();
  console.log("=====================>");
});