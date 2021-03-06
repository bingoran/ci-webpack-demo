const cssnano =  require('cssnano');

module.exports = { 
  ident: 'postcss',
  plugins: [
    require('postcss-preset-env'),  //允许你使用未来的 CSS 特性。
    require("autoprefixer"),//自动添加浏览器前缀
    cssnano(), //压缩css  cssnano是PostCSS的CSS优化和分解插件。cssnano采用格式很好的CSS，并通过许多优化，以确保最终的生产环境尽可能小。
  ]
}