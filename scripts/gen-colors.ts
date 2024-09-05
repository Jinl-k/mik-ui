import { purple, green, gold, red } from "@ant-design/colors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

let colors = "";
function genColors(genColor: string[], type: string) {
  genColor.forEach((color, index) => {
    colors += `  --k-color-${type}-${index + 1}: ${color};\n`;
  });
  colors += `\n`;
}

genColors(purple, "primary");
genColors(green, "success");
genColors(gold, "warning");
genColors(red, "error");

const baseUrl = fileURLToPath(new URL("../", import.meta.url));
const cssFile = path.resolve(
  baseUrl,
  "packages/mik-ui/src/style/theme/colors.css",
);
fs.writeFileSync(cssFile, `:root {\n${colors}}`);
