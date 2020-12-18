import "./style.css";

import React from "react";

import Grid from "./components/Grid";
import FeedBack from "./components/FeedBack";

import { useStore } from "./store/index";

export default function App() {
  const [status, player] = useStore(state => [state.status, state.player]);
  return (
    <main>
      {status !== "ACTIVE" ? <FeedBack /> : <p>Turn: {player}</p>}
      <Grid />
    </main>
  );
}
