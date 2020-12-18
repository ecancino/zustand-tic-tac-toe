import create from "zustand";
import { redux } from "zustand/middleware";

import { win, tie } from "./end-game";
import { State, Grid, Cell } from "./types";

const state: State = {
  status: "INTRO",
  feedback: "TIC TAC TOE",
  player: "X",
  rows: 3,
  columns: 3,
  grid: {} as Grid
};

enum Types {
  START = "START",
  VICTORY = "VICTORY",
  TIE = "TIE",
  SET_TURN = "SET_TURN"
}

function reducer(
  { grid, player, rows, columns, dispatch }: State,
  { type, payload }
) {
  switch (type) {
    case Types.START: {
      return {
        status: "ACTIVE",
        grid: {} as Grid,
        player: "X"
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
      const updatedGrid = {
        ...grid,
        [payload as Cell]: player
      };

      if (win(updatedGrid, player)) {
        return dispatch({ type: "VICTORY", payload: updatedGrid });
      }

      if (tie(updatedGrid, rows, columns)) {
        return dispatch({ type: "TIE", payload: updatedGrid });
      }

      return {
        grid: updatedGrid,
        player: player === "X" ? "O" : "X"
      };
    }
  }
}

export const useStore = create(redux(reducer, state));
