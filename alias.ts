import { fileURLToPath } from "node:url";
import path from "node:path";

const baseUrl = fileURLToPath(new URL(".", import.meta.url));

export default [
  {
    find: /^mik-ui/,
    replacement: path.resolve(baseUrl, "packages/mik-ui/src"),
  },
  {
    find: /^@mik-ui\/utils/,
    replacement: path.resolve(baseUrl, "packages/utils/src"),
  },
  {
    find: /^@mik-ui\/icons/,
    replacement: path.resolve(baseUrl, "packages/icons/src"),
  },
];
