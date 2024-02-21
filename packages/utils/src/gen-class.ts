// 拼接class名
// https://github.com/JedWatson/classnames
// https://github.com/lukeed/clsx
import classNames from 'classnames';
import { computed } from 'vue';
/**
 * a-b__c--d BEM命名格式;
 * B block - ;
 * E element __ ;
 * M modifier -- ;
 */
type BEMType = string | [string, 'B' | 'E' | 'M' | undefined];
/**
 * css类名生成函数
 * @param componentName 组件名
 * @returns 自定义名函数
 */
export function useClassNames(componentName: string) {
  const prefix = 'k';
  const componentClass = `${prefix}-${componentName}`;
  // const cx = (cls: Record<string, boolean>) => {
  //   return classNames(cls);
  // };
  // 改成响应式
  const cx = (cls: () => Record<string, boolean>) => {
    return computed(() => classNames(cls()));
  };

  const customName = (...arg: BEMType[]) => {
    // console.log('arg', arg);
    if (arg.length) {
      return arg.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
          const arg1 = cur[0];
          const arg2 = cur[1];
          if (arg2 === 'E') {
            return `${prev}__${arg1}`;
          } else if (arg2 === 'M') {
            return `${prev}--${arg1}`;
          }
        }
        // 默认为B
        return `${prev}-${cur}`;
      }, componentClass) as string;
    }
    return componentClass;
  };
  // 简化一下
  const customNameE = (e: string) => [e, 'E'] as BEMType;
  const customNameM = (m: string) => [m, 'M'] as BEMType;

  return {
    customName,
    customNameE,
    customNameM,
    cx,
  };
}
