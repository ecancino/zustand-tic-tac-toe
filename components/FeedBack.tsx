import React from "react";
import styled from "styled-components";

import Button from "./Button";
import { useStore } from "../store/index";

type FeedBackParams = {
  className: string;
};

export function FeedBack({ className }: FeedBackParams) {
  const [feedback, start] = useStore(state => [
    state.feedback,
    () => state.dispatch({ type: "START" })
  ]);
  return (
    <div className={className}>
      <span>
        <h1>{feedback}</h1>
        <Button onClick={start}>Start</Button>
      </span>
    </div>
  );
}

export default styled(FeedBack)`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: default;

  color: #ffffff;
  text-align: center;
  font-size: 5vw;

  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    font-size: 10vw;
    padding: 1rem 1.5rem;
  }

  button:hover {
    background: #ffffff;
  }
`;
