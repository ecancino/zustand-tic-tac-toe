import create from "zustand";
import { redux, devtools } from "zustand/middleware";
import pipe from "ramda/es/pipe";

const createStore = pipe(
  redux,
  devtools,
  create
);

export default createStore;
