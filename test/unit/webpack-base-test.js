const { describe, it } = require("mocha");
const assert = require("assert");
const path = require("path");
const rootPath = process.cwd();

describe("webpack.base.js 测试用例", () => {
  const prodConfig = require('../../lib/webpack.base');
  it("entry 路径是否正确", () => {
    assert.equal(prodConfig.entry, path.join(rootPath, 'src/main.js'))
  })
});