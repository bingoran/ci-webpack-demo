const { describe, it } = require("mocha");
const assert = require("assert");
const path = require("path");
const rootPath = process.cwd();


describe("知群测试", () => {
  // 单元测试
  require('./unit/webpack-base-test.js');
  // 冒烟测试
  require('./smoke/index');
});