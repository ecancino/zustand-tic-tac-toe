import React from "react";

import Repeat from "./Repeat";
import Columns from "./Columns";

import { useStore } from "../store/index";

export default function Rows() {
  const rows = useStore(state => state.rows);
  return (
    <Repeat length={rows} children={(row: number) => <Columns row={row} />} />
  );
}
