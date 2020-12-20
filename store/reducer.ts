import { win, tie } from "./end-game";
import { State, Grid, Cell, Types } from "./types";

export default function reducer(
  { grid, player, rows, columns, dispatch }: State,
  { type, payload }
) {
  switch (type) {
    case Types.START: {
      return {
        status: "ACTIVE",
        grid: {} as Grid,
        player: "X",
        feedback: null
      };
    }
    case Types.VICTORY: {
      return {
        status: "VICTORY",
        grid: payload as Grid,
        feedback: `${player} wins!`
      };
    }
    case Types.TIE: {
      return {
        status: "TIE",
        grid: payload as Grid,
        feedback: "Sad tie!"
      };
    }
    case Types.SET_TURN: {
      const updatedGrid: Grid = {
        ...grid,
        [payload as Cell]: player
      };

      if (win(updatedGrid, player)) {
        return dispatch({
          type: "VICTORY",
          payload: updatedGrid
        });
      }

      if (tie(updatedGrid, rows, columns)) {
        return dispatch({
          type: "TIE",
          payload: updatedGrid
        });
      }

      return {
        grid: updatedGrid,
        player: player === "X" ? "O" : "X"
      };
    }
  }
}
