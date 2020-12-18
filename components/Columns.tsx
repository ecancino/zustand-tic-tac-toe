import React from "react";

import Repeat from "./Repeat";
import Cell from "./Cell";
import { useStore } from "../store/index";

type ColumnsParams = {
  row: number;
};

export default function Columns({ row }: ColumnsParams) {
  const columns = useStore(state => state.columns);

  return (
    <tr key={row}>
      <Repeat
        length={columns}
        children={(column: number) => <Cell row={row} column={column} />}
      />
    </tr>
  );
}
