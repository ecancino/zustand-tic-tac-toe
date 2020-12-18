import React from "react";
import styled from "styled-components";

import Button from "./Button";

import { useStore } from "../store/index";

export function CellButton({ row, column, className }) {
  const [grid, setTurn] = useStore(state => [state.grid, state.setTurn]);
  const cellKey = `${row}-${column}`;
  const cellPlayer = grid[cellKey];
  return (
    <Button
      className={className}
      disabled={cellPlayer}
      onClick={() => setTurn(cellKey)}
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
