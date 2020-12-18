import React from "react";

import CellButton from "./CellButton";

export default function Cell({ row, column }) {
  return (
    <td key={column}>
      <CellButton row={row} column={column} />
    </td>
  );
}
