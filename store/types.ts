export type Status = "INTRO" | "ACTIVE" | "VICTORY" | "TIE";

export type Player = "X" | "O";

export enum Types {
  START = "START",
  VICTORY = "VICTORY",
  TIE = "TIE",
  SET_TURN = "SET_TURN"
}

export type Cell =
  | "0-0"
  | "0-1"
  | "0-2"
  | "1-0"
  | "1-1"
  | "1-2"
  | "2-0"
  | "2-1"
  | "2-2";

export type Grid = Record<Cell, Player>;

export type Action = {
  type: string;
  payload: any;
};

export type State = {
  status: Status;
  feedback: string;
  player: Player;
  rows: number;
  columns: number;
  grid: Grid;
  dispatch?: (action: Action) => void;
};
