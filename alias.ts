import { fileURLToPath } from "node:url";
import path from "node:path";

const baseUrl = fileURLToPath(new URL(".", import.meta.url));

export default [
  {
    find: /^k-ui/,
    replacement: path.resolve(baseUrl, "packages/k-ui/src"),
  },
  {
    find: /^@k-ui\/utils/,
    replacement: path.resolve(baseUrl, "packages/utils/src"),
  },
  {
    find: /^@k-ui\/icons/,
    replacement: path.resolve(baseUrl, "packages/icons/src"),
  },
];
