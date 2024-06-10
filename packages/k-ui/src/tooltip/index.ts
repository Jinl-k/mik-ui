import type { App } from "vue";
import Tooltip from "./tooltip";
// 完整路径为
// import Tooltip from "./tooltip/index.ts";
Tooltip.install = (app: App) => {
  app.component(Tooltip.name!, Tooltip);
};
export default Tooltip;
