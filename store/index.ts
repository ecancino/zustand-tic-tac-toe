import create from "zustand";

import { win, tie } from "./end-game";
import { State, Grid, Cell } from "./types";

export const useStore = create<State>(set => ({
  status: "INTRO",
  feedback: "TIC TAC TOE",
  player: "X",
  rows: 3,
  columns: 3,
  grid: {} as Grid,
  startGame: () =>
    set(() => ({
      status: "ACTIVE",
      grid: {} as Grid,
      player: "X"
    })),
  setTurn: (cell: Cell) => {
    return set(({ grid, player, rows, columns }) => {
      const updatedGrid = {
        ...grid,
        [cell]: player
      };

      if (win(updatedGrid, player)) {
        return {
          grid: updatedGrid,
          status: "VICTORY",
          feedback: `${player} wins!`
        };
      }

      if (tie(updatedGrid, rows, columns)) {
        return {
          grid: updatedGrid,
          status: "TIE",
          feedback: `Sad tie!`
        };
      }

      return {
        grid: updatedGrid,
        player: player === "X" ? "O" : "X"
      };
    });
  }
}));
