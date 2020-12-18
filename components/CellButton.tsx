import React from "react";
import styled from "styled-components";

import Button from "./Button";
import { useStore } from "../store/index";
import { Cell } from "../store/types";

type CellButtonParams = {
  row: number;
  column: number;
  className: string;
};

export function CellButton({ row, column, className }: CellButtonParams) {
  const [grid, dispatch] = useStore(state => [state.grid, state.dispatch]);

  const cellKey = `${row}-${column}` as Cell;
  const cellPlayer = grid[cellKey];
  return (
    <Button
      className={className}
      disabled={cellPlayer}
      onClick={() => dispatch({ type: "SET_TURN", payload: cellKey })}
      dangerouslySetInnerHTML={{
        __html: cellPlayer ? cellPlayer : "&nbsp;"
      }}
    />
  );
}

export default styled(CellButton)`
  width: 100%;
  height: 100%;
  font-size: 10vw;
  padding: 0;
  margin: 0;
`;
