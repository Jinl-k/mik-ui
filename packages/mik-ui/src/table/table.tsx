import { defineComponent, isVNode } from "vue";
import type { TableProps } from "./interface";
import { Header } from "./header";
import { Body } from "./body";
import { filterEmpty, isBaseType } from "@v-c/utils";
import { useClassNames } from "@mik-ui/utils";

export default defineComponent(
  (props: TableProps, { slots }) => {
    const { customName } = useClassNames("table");

    return () => {
      const { columns, data } = props;

      const children = filterEmpty(slots.default?.() || []);

      const myColumns: any[] = columns ?? [];

      if (myColumns.length === 0) {
        for (const child of children) {
          if (isBaseType(child) || !isVNode(child)) return;

          if (child.type && (child as any).type?.displayName) {
            myColumns.push(child.props);
          }
        }
      }

      const cls = {
        [customName()]: true,
      };
      return (
        <table class={cls}>
          <Header columns={myColumns} v-solt={slots} />
          <Body columns={myColumns} data={data} />
        </table>
      );
    };
  },
  {
    name: "KTable",
  },
);

// export default defineComponent({
//   setup() {
//     return () => {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>1</th>
//               <th>2</th>
//               <th>3</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>c1</td>
//               <td>c2</td>
//               <td>c3</td>
//             </tr>
//           </tbody>
//         </table>
//       );
//     };
//   },
// });
