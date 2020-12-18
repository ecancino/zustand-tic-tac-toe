import React, { Fragment } from "react";

type RepeatParams = {
  length: number;
  children: (i: number) => JSX.Element;
};

export default function Repeat({ length, children }: RepeatParams) {
  return <Fragment>{Array.from({ length }, (_, i) => children(i))}</Fragment>;
}
