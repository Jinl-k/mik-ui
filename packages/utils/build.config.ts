import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  // 不需要ts后缀
  entries: ["src/index"],
  // 打包前清空dist文件夹
  clean: true,
  // 生成类型
  declaration: true,
  // 同时生成es 和cjs
  rollup: {
    emitCJS: true,
  },
});
