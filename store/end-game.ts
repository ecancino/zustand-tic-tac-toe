import { Grid, Player, Cell } from "./types";

const validateTrio = (grid: Grid, player: Player) => (trio: Cell[]): boolean =>
  trio.every(cell => grid[cell] === player);

export const win = (grid: Grid, player: Player) => {
  const validate = validateTrio(grid, player);

  return (
    // Top Row
    validate(["0-0", "0-1", "0-2"]) ||
    // Middle Row
    validate(["1-0", "1-1", "1-2"]) ||
    // Bottom Row
    validate(["2-0", "2-1", "2-2"]) ||
    // Left Column
    validate(["0-0", "1-0", "2-0"]) ||
    // Middle Column
    validate(["0-1", "1-1", "2-1"]) ||
    // Right Column
    validate(["0-2", "1-2", "2-2"]) ||
    // Top Left -> Bottom Right
    validate(["0-0", "1-1", "2-2"]) ||
    // Bottom Left -> Top Right
    validate(["0-2", "1-1", "2-0"])
  );
};

export const tie = (grid: Grid, rows: number, columns: number) =>
  Object.keys(grid).length >= rows * columns;
