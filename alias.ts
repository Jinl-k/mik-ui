import { fileURLToPath } from "node:url";
import path from "node:path";

const baseUrl = fileURLToPath(new URL(".", import.meta.url));

export default [
  {
    find: /^kevin-ui/,
    replacement: path.resolve(baseUrl, "packages/kevin-ui/src"),
  },
  {
    find: /^@kevin-ui\/utils/,
    replacement: path.resolve(baseUrl, "packages/utils/src"),
  },
  {
    find: /^@kevin-ui\/icons/,
    replacement: path.resolve(baseUrl, "packages/icons/src"),
  },
];
