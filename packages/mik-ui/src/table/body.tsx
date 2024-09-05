import { useClassNames } from "@mik-ui/utils";
import { defineComponent } from "vue";
import type { BodyProps } from "./interface";

export const Body = defineComponent<BodyProps>({
  name: "KBody",
  setup(props = { columns: [], data: [] }) {
    const { customName } = useClassNames("table");
    return () => {
      const { columns, data } = props;
      const cellCls = {
        [customName("cell")]: true,
        [customName("body-cell")]: true,
      };
      const renderCell = (item: any) => {
        return columns?.map((v) => {
          return (
            <td class={cellCls} key={v.key}>
              {item[v.key]}
            </td>
          );
        });
      };
      const rowCls = {
        [customName("body-row")]: true,
      };
      const renderData = () => {
        return data?.map((v) => {
          return (
            <tr class={rowCls} key={v.key}>
              {renderCell(v)}
            </tr>
          );
        });
      };
      const cls = {
        [customName("body")]: true,
      };
      return <tbody class={cls}>{renderData()}</tbody>;
    };
  },
});
