// 初始化组件的一个入口

import type { App } from 'vue';
import Button from './button.vue';

/**
 * 在使用别人组件库时常见到这样写法
 * import { Button } from 'xxx';
 * app.use(Button)
 * 因为如下: (全局)注册一个组件
 * @param app vue实例的一些信息
 */
Button.install = (app: App) => {
  app.component(Button.name!, Button);
};
export default Button;
