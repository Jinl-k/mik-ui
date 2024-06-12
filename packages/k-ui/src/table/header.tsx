import { defineComponent } from "vue";
import type { HeaderProps } from "./interface";
import { useClassNames } from "@k-ui/utils";

export const Header = defineComponent<HeaderProps>({
  name: "Header",
  setup(props = { columns: [] }) {
    const { customName } = useClassNames("table");

    return () => {
      const cellCls = {
        [customName("cell")]: true,
        [customName("header-cell")]: true,
      };
      const renderColumns = () => {
        return (props.columns ?? []).map((column) => {
          return (
            <th key={column.key} class={cellCls}>
              {column.title}
            </th>
          );
        });
      };

      const rowCls={
        [customName('header-row')]:true
      }
      const cls={
        [customName('header')]:true
      }
      return (
        <thead class={cls}>
          <tr class={rowCls}>{renderColumns()}</tr>
        </thead>
      );
    };
  },
});
