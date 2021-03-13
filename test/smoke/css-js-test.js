const { describe, it } = require("mocha")
const glob = require('glob-all');
const path = require('path');
const rootPath = process.cwd();

describe("检查生成 css js 文件", () => {
  it("是否生成了 css js 文件", (done) => {
    const files = glob.sync([
      path.join(rootPath, "dist/js/main.*.js"),
      path.join(rootPath, "dist/css/main.*.css"),
    ]);

    if(files.length > 0){
      done();
    } else {
      throw new Error("没有生成 css js 文件");
    }
  })
})