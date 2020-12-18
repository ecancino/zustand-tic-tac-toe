import React from "react";

import Repeat from "./Repeat";
import Cell from "./Cell";

import { useStore } from "../store/index";

export default function Columns({ row }) {
  const columns = useStore(state => state.columns);

  return (
    <tr key={row}>
      <Repeat
        length={columns}
        children={column => <Cell row={row} column={column} />}
      />
    </tr>
  );
}