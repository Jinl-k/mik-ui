import { fileURLToPath } from "node:url";
import path from "node:path";
// 遍历文件
import fg from "fast-glob";
import fs from "fs-extra";
import * as sass from "sass";

// 找到kevin-ui具体目录
const kuiDir = fileURLToPath(new URL("../packages/kevin-ui", import.meta.url));
// 然后遍历kevin-ui内所有sass文件
const sassFiles = fg.sync(["src/**/style/index.scss", "!src/style"], {
  cwd: kuiDir,
});

async function compile() {
  for (const file of sassFiles) {
    // 解析完整路径
    const filePath = path.resolve(kuiDir, file);

    // 编译 SCSS 文件到 CSS
    const cssCode = await sass.compileAsync(filePath);

    // 定义编译后 CSS 的输出路径
    const esDir = path.resolve(
      kuiDir,
      `./es${file.slice(3, file.length - 5)}.css`,
    );
    const libDir = path.resolve(
      kuiDir,
      `./lib${file.slice(3, file.length - 5)}.css`,
    );

    // 将编译后的 CSS 写入输出文件
    fs.outputFileSync(esDir, cssCode.css);
    fs.outputFileSync(libDir, cssCode.css);
  }
}

// 执行编译函数
compile().catch((error) => console.error(error));
