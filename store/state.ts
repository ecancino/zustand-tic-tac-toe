import { State, Grid } from "./types";

const state: State = {
  status: "INTRO",
  feedback: "TIC TAC TOE",
  player: "X",
  rows: 3,
  columns: 3,
  grid: {} as Grid
};

export default state;
