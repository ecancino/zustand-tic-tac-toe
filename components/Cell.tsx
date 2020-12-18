import React from "react";

import CellButton from "./CellButton";

type CellParams = {
  row: number;
  column: number;
};

export default function Cell({ row, column }: CellParams) {
  return (
    <td key={column}>
      <CellButton row={row} column={column} />
    </td>
  );
}
